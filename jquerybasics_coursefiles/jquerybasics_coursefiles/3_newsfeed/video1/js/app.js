const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$pdfs.hide();

// have a form and want to hide all inputs with a name attribute starting with "add"
// $('input[name^="add"]');