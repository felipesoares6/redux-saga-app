import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

import { INCREMENT_ASYNC, increment } from '../ducks/count'

function* incrementAsync () {
  yield delay(1000)
  yield put(increment())
}

export function* watchIncrementAsync () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}


