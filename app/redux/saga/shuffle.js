/* eslint no-console: 0 */

import localforage from 'localforage';
import { put, select, takeEvery } from 'redux-saga/effects';

import { LF_STORE } from 'app/config/localforage';
import { SET_SHUFFLE } from 'app/redux/constant/shuffle';

import { shuffle } from 'app/redux/action/shuffle';

function* shuffleBootFromLF() {
  try {
    const lfShuffle = yield localforage.getItem(LF_STORE.SHUFFLE);
    yield put(shuffle(lfShuffle));
  } catch (err) {
    console.warn('Unable to boot shuffle from LF', err);
  }
}

function* toggleShuffle() {
  const state = yield select();
  yield put(shuffle(!state.shuffle));

  try {
    yield localforage.setItem(LF_STORE.SHUFFLE, !state.shuffle);
  } catch (err) {
    console.warn('Unable to save shuffle state to LF', err);
  }
}

function* watchToggleShuffle() {
  yield takeEvery(SET_SHUFFLE, toggleShuffle);
}

module.exports = {
  shuffleBootFromLF,
  watchToggleShuffle,
};