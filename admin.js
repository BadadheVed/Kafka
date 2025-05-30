import { kafka } from "./client.js";
async function init() {
  const admin = kafka.admin();
  console.log("Admin Is Connecting");
  admin.connect();
  console.log("Admin Is Connected");
  console.log("Creating Topics");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics Created");
  console.log("Admin Disconnecting");
  await admin.disconnect();
  console.log("Admin Disconnected");
}

init();
