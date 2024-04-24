import { protectedInstance } from "./instance";
const trendservices = {
  getalltrends: async () => {
    return protectedInstance.get("/trends/trendsall");
  },
};
export default trendservices;
