'use strict'

const { go, chan, put, take, timeout, close, alts } = require('./core-async-lib')

const c = chan()
const pending = Symbol('pending')

/**
 TO RUN TESTS:
 Each go block tests a different function.  To run a test, comment out
 the `return pending` at the start of the generator and run:

 $ node --harmony --harmony_destructuring core-async.js

 It should be noted that not all tests should be ran together, as they
 may interfere with one another
 **/

/* Testing go */
go(function* () {
  return pending
  let v, gc, tc
  console.log('Creating go chan')
  gc = go(function* () {
    tc = timeout(1000)
    yield take(tc)
    return 1
  })
  v = yield take(gc)
  console.log('Taking', v, 'from channel')
})

/* Testing put */
go(function* () {
  return pending
  console.log('Puttin 1 onto channel c')
  yield put(c, 1)
  console.log('Put 1 onto channel c')
  yield put(c, 2)
  console.log('Put 2 onto channel c')
})

/* Testing take */
go(function* () {
  return pending
  let v
  console.log('Taking from channel c')
  v = yield take(c)
  console.log('Took', v, 'from channel')
  v = yield take(c)
  console.log('Took', v, 'from channel')
})

/* Testing timeout function */
go(function* () {
  return pending
  let v
  setTimeout(() => console.log('1 second elapsed'), 1000)
  const timoutChan = timeout(1000)
  console.log('Timeout chan created')
  yield take(timoutChan)
  console.log('Timeout chan finished')
})

/* Testing close function */
go(function* () {
  return pending
  let v
  yield put(c, 1)
  console.log('Put 1 on channel')
  close(c)
  console.log('Closed channel')
  yield put(c, 2)
  console.log('Put 2 on channel')
  v = yield take(c)
  console.log('Took', v, 'from closed channel')
  v = yield take(c)
  console.log('Took', v, 'from closed channel')
})

/* Testing alts function */
go(function* () {
  return pending
  let v, tc
  yield put(c, 1)
  setTimeout(() => console.log('1 second elapsed'), 1000)
  tc = timeout(1000)
  v = yield alts([take(tc), take(c)])
  console.log('Took', v, 'from channel')
  tc = timeout(1000)
  v = yield alts([take(tc), take(c)])
  console.log('Took', v, 'from channel')
})
