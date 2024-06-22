// import { ServiceBroker } from "moleculer";
import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";

async function startApp() {
  // start service
  await UserService.start();
  await EmailService.start();

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

    // email sending
    const emailResponse = await EmailService.call("email.sendEmail", {
      to: newUser.email,
      subject: "Welcome to the world of Arushan",
      body: "You are registered successfully",
    });
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
