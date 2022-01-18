$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp();

/**
 * JavaScript
 */
const title = "My First Blog Post";
const content = "This is my <strong>first</strong> first post!";

/**
 * jQuery selector
 */
$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(content);