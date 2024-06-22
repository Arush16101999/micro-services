import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

const user = [];

function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}

broker.createService({
  name: "user",
  actions: {
    async createUser(ctx) {
      const { name, email } = ctx.params;
      const newUser = { id: generateId(), name, email };
      user.push(newUser);
      return newUser;
    },
    async getUser(ctx) {
      return user;
    },
  },
});

export default broker;
