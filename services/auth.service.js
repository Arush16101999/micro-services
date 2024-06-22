import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "auth",
  actions: {
    async authUser(ctx) {
      const { userName, password } = ctx.params;
      if (userName === "arush" && password === "arush") {
        return {
          success: true,
          message: "User Authenticated",
        };
      } else {
        return {
          success: false,
          message: "OOppps Not Authenticated",
        };
      }
    },
  },
});

export default broker;
