import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "My-App",
  brokers: ["192.168.239.158:9092"],
});
