import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './count.js'

export default function* rootSaga () {
  yield all([
    watchIncrementAsync()
  ])
}
