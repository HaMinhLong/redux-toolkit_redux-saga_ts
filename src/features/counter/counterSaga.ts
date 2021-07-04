import { takeEvery, delay, put, call, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSuccess } from './counterSlice';
import { fetchCount } from './counterAPI';

// export function* log(action: PayloadAction) {
//   console.log('log: ', action);
// }

function* test() {
  // and
  yield call(fetchCount, 2);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');

  // Wait 2s
  yield delay(2000);
  console.log('Waiting done, dispatch action');

  // Dispatch actions success
  yield put(incrementSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');
  // yield takeEvery(increment().type, log);
  // yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
