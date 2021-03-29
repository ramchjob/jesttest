const helper = require("./helper")
async function getDay() {
  const value = await helper.getResponse();
  console.log("value" + value)
  const day = helper.getDay(value);
  console.log("day" + console.log("value" + value))
  return day;
}

module.exports = {
  getDay
}