const moment = require('moment');
const momentTz = require("moment-timezone");

moment.locale("id");
moment.tz.setDefault("Asia/Jakarta");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format(' HH:mm')
  };
}

module.exports = formatMessage;
