// import { ServiceBroker } from "moleculer";
import UserService from "./services/user.service.js";

async function startApp() {
  // start service
  await UserService.start();

  // call action
  try {
    const newUser = await UserService.call("user.createUser", {
      name: "Arush",
      email: "arush@gmail.com",
    });
    console.log("New User Created : ", newUser);

    // get the users
    const users = await UserService.call("user.getUser");
    console.log("All Users : ", users);
  } catch (err) {
    console.log(err);
  } finally {
    // stop service
    await UserService.stop();
  }
}

startApp();

// const broker = new ServiceBroker();

/** 
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
*/
