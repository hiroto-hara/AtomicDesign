import { atom } from "recoil";

export const userState = atom({
  key: "usreState",
  default: { isAdmin: false }
});
