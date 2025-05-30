import { kafka } from "./client.js";

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer .. ");
  await producer.connect();
  console.log("Producer Is Conneted");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "tony stark", loc: "South" }),
      },
    ],
  });
  console.log("Producer has sent the data");
  console.log("disconnecting Producer");
  await producer.disconnect();
  console.log("Producer Disconnected");
}
init();
