const queue = [];

const addOrder = (order) => {
  queue.push(order);
  console.log("Order added to queue");
};

const processOrders = () => {
  while (queue.length > 0) {
    const order = queue.shift();
    console.log("Processing order:", order);
  }
};

module.exports = { addOrder, processOrders };