import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { to, subject, body } = ctx.params;
      console.log(`Email sent to ${to} with subject ${subject}`);
      console.log(`Email Arrived & ${body}`);
      return `Email Arrived to ${to} `;
    },
  },
});

export default broker;
