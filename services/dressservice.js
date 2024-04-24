import { protectedInstance } from "./instance";

const dressservice = {
  getalldresses: async () => {
    return protectedInstance.get("/dresses/getalldress");
  },
};
export default dressservice;
