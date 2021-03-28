const { convertValue } = require('../../conversion-functions/convertValue.js');
const { convertPage } = require('../../conversion-functions/convertPage.js');

function togglePopup() {
  if (query('#tzc-options-display').classList.contains('hidden')) {
    query('#tzc-options-display').classList.remove('hidden');
  } else {
    query('#tzc-options-display').classList.add('hidden');
  }
}

function convertInput() {
  // Get input from user
  const input = query('#tzc-input').value;
  const fromTimeZone = query('#tzc-from-tz').value;
  const toTimeZone = query('#tzc-to-tz').value;
  // User's current timezone

  const convertedDateTime = convertValue(input, fromTimeZone, toTimeZone);

  if (convertedDateTime) {
    query(
      '#tzc-output-placeholder'
    ).innerHTML = `Conversion results: ${convertedDateTime.dateTime} ${convertedDateTime.zoneName} <br><br> Unix time: ${convertedDateTime.unixTime}`;
  } else {
    query(
      '#tzc-output-placeholder'
    ).innerHTML = `Please enter a formatted time: YYYY-MM-DD HH:MM:SS, Message link or Unix time`;
  }
}

module.exports = { togglePopup, convertInput, convertPage };
