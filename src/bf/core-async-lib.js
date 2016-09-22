'use strict'

/**
 TODO:
 remove polling from step function
 write an HTTP parser - i.e.
   byteChunkChan => { errorChan, firstLineChan, headerChan, bodyChan }
 */

const blocked = Symbol('blocked')
const free = Symbol('freeeefalllllllllinnnn')

const chan = (buffer) => ({
  buffer: buffer || 0,
  value: [],
  closed: false,
})

const isFull = (chan) => {
  return chan.value.length > chan.buffer
}

const isEmpty = (chan) => {
  return chan.value.length === 0
}

const isClosed = (chan) => {
  return chan.closed
}

const enqueue = (chan, val) => {
  if (chan.closed) return
  return chan.value.push(val)
}

const dequeue = (chan) => {
  return chan.value.shift()
}

/**
 Each step recieves the go routine chan, the generator instance of the current
 go routine, and the current step of the generator ({value: Function,
 done: Boolean}). If the state is blocked, try again on the next function tick.
 Otherwise, continue to the next generator step
 **/
const step = (chan, gen, {value: attempt, done}) => {
  if (done) {
    enqueue(chan, attempt)
    close(chan)
    return
  }
  let [state, value] = attempt()
  if (state === blocked) {
    setTimeout(step.bind(null, chan, gen, {value: attempt, done}), 1)
  } else {
    step(chan, gen, gen.next(value))
  }
}

/**
 starts an async go routine.  Accepts a generator function, and returns
 a channel.  When the generator function returns, it will enqueue the return
 value and close the channel.
 **/
const go = (gf) => {
  const gen = gf()
  const c = chan()
  step(c, gen, gen.next())
  return c
}

/**
 marks a channel as closed.  Values will still be able to be taken (if the
 buffer is empty, it will continue to return nil).  Putting a value will
 succeed, but not enqueue any new values.
 **/
const close = (chan) => {
  chan.closed = true
}

/**
 put is an async function, and is intended to be yielded.  It returns
 a function that will check the channel, either telling the go routine
 to block, or that the channel is now free, in which case it will enqueue
 the value
 **/
const put = (chan, val) => {
  return () => {
    if (isFull(chan) && !isClosed(chan)) {
      return [blocked]
    } else {
      enqueue(chan, val)
      return [free]
    }
  }
}

/**
 take is an async function, and is intended to be yielded.  It returns
 a function that will check if the channel can be dequeued, returning
 the tuple [free, val] if so, or telling the go routine to block
 **/
const take = (chan) => {
  return () => {
    if (isEmpty(chan) && !isClosed(chan)) {
      return [blocked]
    } else {
      return [free, dequeue(chan)]
    }
  }
}

/**
 returns a channel that will have a value enqueued after the designated
 time, and then close the channel.  It does *not* return an operation.
 **/
const timeout = (time) => {
  const c = chan()
  setTimeout(() => {
    enqueue(c, null)
    close(c)
  }, time)
  return c
}

/**
 accepts an array of operations, returning the return value of the first
 successful operation.
 NOTE: This is not the standard behavoir of alt or alts in core.async.
 alt & alts take different forms and will automatically assume a put or take.
 This implementation is more explicit, and feels more natural in JavaScript.
 **/
const alts = (operations) => {
  return () => {
    const success = operations
      .map(o => o())
      .find(a => a[0] === free)

    if (success) {
      return success
    } else {
      return [blocked]
    }
  }
}


module.exports = {go, chan, close, put, take, timeout, alts}
