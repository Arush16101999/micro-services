import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

//greeter Service
broker.createService({
  name: "greeter",
  actions: {
    sayHello(ctx) {
      return `Hi Buddy! ${ctx.params.name}!`;
    },
  },
});

async function startApp() {
  await broker.start();
  const res = await broker.call("greeter.sayHello", { name: "Arush" });
  console.log(res);
  broker.stop();
}

startApp();
