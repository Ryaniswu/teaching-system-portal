const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomString(len) {
  let res = "";
  while (--len) res += chars[Math.floor(Math.random() * chars.length)];
  return res;
}

module.exports = {
  randomString
};
