let totalRequests = 0;

module.exports = (req, res, next) => {
  totalRequests++;
  console.log("Total Requests:", totalRequests);
  next();
};