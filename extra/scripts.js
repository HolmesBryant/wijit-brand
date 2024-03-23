function change (event, attr) {
  const elem = document.querySelector('#demo-form');
  const value = (attr === 'force-error') ? event.target.checked : event.target.value;
  elem.setAttribute(attr, value);
}

/**
 * Grab the README file and stick it in the "instructions" container
 */
function getReadme () {
  const elem = document.querySelector('#instructions');
  fetch ('./README.md')
  .then (response => response.text())
  .then (text => {
    elem.textContent = text;
  });
}

getReadme();
