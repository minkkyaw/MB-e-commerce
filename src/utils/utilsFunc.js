import { v5 as uuidv5 } from "uuid";

export const generateUUID = name => {
  const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

  // return uuidv5(name, MY_NAMESPACE);
  let randomNumber = Math.random() * 10000;
  return new Date().getTime() + randomNumber + name;
};
