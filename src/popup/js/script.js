// Bind document functions for querying the DOM
const queryID = document.getElementById.bind(document);

// Show / Hide the Popup
function togglePopup() {
  if (queryID('options-display').classList.contains('hide-timezone-element')) {
    queryID('options-display').classList.remove('hide-timezone-element');
    queryID('open-options-wrapper').style.setProperty('border-radius', '20px 0 0 0px');
  } else {
    queryID('options-display').classList.add('hide-timezone-element');
    queryID('open-options-wrapper').style.setProperty('border-radius', '20px 0 0 20px');
  }
}

function closeAlert() {
  queryID('js-conversion-alert').classList.add('hide-timezone-element');
}

function toggleInputs(input_id) {
  if ('js-radio-manual' === input_id || 'js-input-manual' === input_id) {
    queryID('js-radio-manual').checked = true;
    queryID('js-input-manual').disabled = false;

    // Disable picker input
    queryID('js-input-picker').style.backgroundColor = '#d3d3d3';
    queryID('js-input-manual').style.backgroundColor = '#fff';
  } else {
    queryID('js-radio-picker').checked = true;
    queryID('js-input-picker').disabled = false;

    // Disable manual input
    queryID('js-input-manual').style.backgroundColor = '#d3d3d3';
    queryID('js-input-picker').style.backgroundColor = '#fff';
  }
}

function displayConversion(dateTime, unixTime) {
  const dateTimeSplit = dateTime.split(' ');

  queryID('js-conversion-output').classList.remove('hide-timezone-element');
  queryID(
    'js-conversion-output'
  ).innerHTML = `<label>&#9989;</label> <h3>Conversion results: </h3>  <h2><span style="color:#D56856;">${dateTimeSplit[0]}</span> <span style="color:#00BDDD;">${dateTimeSplit[1]}</span> <span>${dateTimeSplit[2]}</span></h2> <h4>Timestamp: ${unixTime}</h4>`;
}

function displayError() {
  queryID('js-conversion-output').classList.add('hide-timezone-element');
  queryID('js-conversion-alert').classList.remove('hide-timezone-element');
}

module.exports = { togglePopup, closeAlert, toggleInputs, displayConversion, displayError };
