'use strict'

const blocked = Symbol('blocked')
const free = Symbol('freeeefalllllllllinnnn') //{name: 'free'}

const chan = (buffer) => ({
  buffer: buffer || 0,
  value: [],
})

const isFull = (chan) => {
  return chan.value.length > chan.buffer
}

const isEmpty = (chan) => {
  return chan.value.length === 0
}

const enqueue = (chan, val) => {
  return chan.value.push(val)
}

const dequeue = (chan) => {
  return chan.value.shift()
}

const step = (gen, {value: attempt, done}) => {
  if (done) return
  let [state, value] = attempt()
  if (state === blocked) {
    setTimeout(step.bind(null, gen, {value: attempt, done}), 1)
  } else {
    step(gen, gen.next(value))
  }
}

const go = (gf) => {
  const gen = gf()
  step(gen, gen.next())
}

const put = (chan, val) => {
  return () => {
    if (isFull(chan)) {
      return [blocked]
    } else {
      enqueue(chan, val)
      return [free]
    }
  }
}

const take = (chan) => {
  return () => {
    if (isEmpty(chan)) {
      return [blocked]
    } else {
      return [free, dequeue(chan)]
    }
  }
}

const c = chan()

go(function* () {
  console.log('Puttin 1 onto channel c')
  yield put(c, 1)
  console.log('Put 1 onto channel c')
  yield put(c, 2)
  console.log('Put 2 onto channel c')
})

go(function* () {
  let v
  console.log('Taking from channel c')
  v = yield take(c)
  console.log('Took', v, 'from channel')
  v = yield take(c)
  console.log('Took', v, 'from channel')
})
