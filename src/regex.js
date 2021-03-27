module.exports = {
  // Checks if there is a DateTime in the input:
  // YYYY-MM-DD HH:mm:ss (Zone Name)
  // Example: 2021-01-01 19:00:00 PT
  hasDateTime(target) {
    const fullDateTimeRegex = /(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:(?:\:\d{2}){1,2}))(?:(?:\s(?:[A-Z]{2,5})|(?:\.\w*)\s(?:[A-Z]{2,5})|(?:\s(?:[\+-](?:\d{4}|\d{2})))))|(?:\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTimeMatch = fullDateTimeRegex.exec(target);
    return dateTimeMatch ? true : false;
  },

  // Checks if there is 10 digits in the input (unix time)
  // TODO: this should check any amount of digits
  hasUnixTime(target) {
    const unixRegex = /\d{10}/;
    const unixTimeMatch = unixRegex.exec(target);
    return unixTimeMatch ? true : false;
  },

  // Gets the DateTime value from the input
  // (YYYY-MM-DD HH:mm:ss)
  getDateTime(input) {
    const dateTimeRegex = /(\d{4}\-\d{2}\-\d{2}\s\d{2}(?:\:\d{2}){1,2})/;
    const dateTime = dateTimeRegex.exec(input);
    return dateTime[1];
  },

  // Gets the DateTime value from the input
  // Examples: PT, PST, AEST, +12, -12
  getTimeZoneAbbrev(input) {
    const zoneNameRegex = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/;
    const zoneName = zoneNameRegex.exec(input);
    return zoneName[1];
  },

  // Gets the UnixTime value from the input
  // Example: 0000000000
  getUnixTime(input) {
    const unixRegex = /\d{10}/;
    const unixTime = unixRegex.exec(input);
    return unixTime[0];
  },
};
