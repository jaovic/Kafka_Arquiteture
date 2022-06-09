const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ['172.20.0.1:19092'],
});
let i = 0
const consumer = kafka.consumer({ groupId: "test-group" });
async function consume() {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      i++
      console.log(i)
      console.log({
        value: message.value.toString(),
      });
    },
  });
}

consume().catch(console.error)
