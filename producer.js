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
        partition: 1,
        key: "location-update",
        value: JSON.stringify({ name: "Ayush Daniels", loc: "South" }),
      },
    ],
  
  });
  await producer.send({
    topic: "college-updates",
    messages: [
      {
        partition: 1,
        key: "location-update",
        value: JSON.stringify({ name: "Ayush Daniels", loc: "South" }),
      },
    ],
  
  });
  console.log("Producer has sent the data");
  console.log("disconnecting Producer");
  await producer.disconnect();
  console.log("Producer Disconnected");
}
init();
