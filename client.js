import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "My-App",
  brokers: ['localhost:9092'],
});
