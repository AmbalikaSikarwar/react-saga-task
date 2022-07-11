import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,

  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_ERROR,

  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
} from "../Action/actionType";

import {put, takeEvery } from "redux-saga/effects";

function* registerUser(action) {
  try {
    yield put({ 
      type: REGISTER_SUCCESS, 
      payload: action.payload 
    });
  }catch (e) {
    yield put({ 
      type: REGISTER_ERROR, 
      error: e.message 
    });
  }
}


function* loginUser(action) {
  try {
    
    yield put({ 
      type: LOGIN_SUCCESS, 
      payload: action.payload 
    });
  } catch (e) {
    yield put({ 
      type: LOGIN_ERROR, 
      error: e.message 
    });
  }
}

function* deleteUser(action) {
  try {
    
    yield put({ 
      type: DELETE_SUCCESS, 
      payload: action.payload 
    });
  } catch (e) {
    yield put({ 
      type: DELETE_ERROR, 
      error: e.message 
    });
  }
}


function* update(action) {
  console.log('sagaaction', action)
  try {
    yield put({ 
      type: UPDATE_SUCCESS, 
      payload: action.payload,
      id:action.id 
    });
  } catch (e) {
    yield put({ 
      type: UPDATE_ERROR, 
      error: e.message 
    });
  }
}

function* userSaga() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
  yield takeEvery(LOGIN_REQUEST, loginUser);
  yield takeEvery(DELETE_REQUEST, deleteUser);
  yield takeEvery(UPDATE_REQUEST, update);
}

export default userSaga;
