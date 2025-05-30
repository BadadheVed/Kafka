import { kafka } from "./client.js";

const init = async () => {
  const consumer = kafka.consumer({ groupId: "users-1" }); // add the gropuname in which you want to assign the user
  console.log("Connection The Consumer");
  await consumer.connect();
  console.log("Consumer is Connected");
  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `New Messaage on ${topic}, And On Partition: ${partition}`,
        message.value.toString()
      );
    },
  });
};
init();
