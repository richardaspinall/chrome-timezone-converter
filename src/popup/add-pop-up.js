import options from './html/options.html';
import popupButton from './html/pop-up.html';
import popupCSS from './css/pop-up.css';
const { togglePopup, convertInput } = require('./js/script.js');

// Import convertPage() for the Pop-up to use
const convertPage = require('../convert-page').default;

// This function adds the Pop-up to the page
function addPopup() {
  const query = document.querySelector.bind(document);

  // Add CSS for Pop-up
  const head = query('head');
  const css = document.createElement('style');
  css.innerHTML = popupCSS;

  head.appendChild(css);

  // Add "pop up" button to the body of page
  const referenceNode = query('body');
  const converterTool = document.createElement('div');
  converterTool.innerHTML = popupButton;

  referenceNode.appendChild(converterTool);

  // Add TimeZone options into the Pop-up for selection
  query('#tzc-full-list').innerHTML = options;
  query('#tzc-from-tz').innerHTML = options;
  query('#tzc-to-tz').innerHTML = options;

  // Add toggle to open and close Pop-up
  query('#tzc-open-button').onclick = togglePopup;
  query('#tzc-close-options-button').onclick = togglePopup;

  // Add convert button for manual conversion
  query('#tzc-convert-button').onclick = convertInput;

  // Add listener for the picker to immediately run the conversion when new TimeZone is selected
  query('#tzc-full-list').addEventListener('change', (event) => {
    convertPage(localStorage.getItem('currentTimeZone'), event.target.value);
  });
}

export default addPopup;
