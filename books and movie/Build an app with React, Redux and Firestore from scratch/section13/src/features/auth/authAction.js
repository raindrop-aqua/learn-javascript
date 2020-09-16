import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
import firebase from "../../app/config/firebase";
import { appInitialize } from "../../app/async/asyncReducer";
import { listenToCurrentUserProfile } from "../profiles/profileActions";
import {
  dataFromSnapshot,
  getUserProfile,
} from "../../app/firestore/firestoreService";

export function signInUser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch(appInitialize());
        });
      } else {
        dispatch(signOutUser());
        dispatch(appInitialize());
      }
    });
  };
}

export function signOutUser(payload) {
  return {
    type: SIGN_OUT_USER,
  };
}
