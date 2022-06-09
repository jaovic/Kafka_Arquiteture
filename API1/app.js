const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["172.20.0.1:19092"],
});
const producer = kafka.producer();

async function produce() {
  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello KafkaJS user!" }],
  });

  await producer.disconnect();
}

// produce()
//   .then(() => {
//     producer.disconnect();
//   })
//   .catch((error) => console.error(error));


  // setInterval(() => {
  //   produce()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  //   console.log("mandei");
  // }, 5000);

  async function test() {
    for(let i=0; i<10; i++){
      await new Promise(resolve => setTimeout(console.log('rodou'), 5000));
      
      await produce()
    }
  }

  test();

producer.disconnect();
