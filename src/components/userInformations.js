import { findIndex } from "lodash";
const user = [
  {
    name: "vijay",
    password: "123"
  },
  {
    name: "admin",
    password: "admin"
  }
];

export const verifyUser = (userInformation) => {
  return findIndex(user, userInformation);
};
