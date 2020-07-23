import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;

export const getEmail = (state) => state[NAME_SPACE].email;
export const getSignInStatus = (state) => state[NAME_SPACE].isSignIn;
