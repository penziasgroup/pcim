jQuery(document).ready(function($) {
  // start of inline field labels
  $('.webform-client-form .form-item input').each(function (type) {

    $(this).focus(function () {
      $(this).prev('label').addClass('focus');
    });
 
    $(this).keypress(function () {
      $(this).prev('label').addClass('has-text').removeClass('focus');
    });
 
    $(this).blur(function () {
      if ($(this).val() == '') {
        $(this).prev('label').removeClass('has-text').removeClass('focus');
      }
    });

  });

}); // end of doc ready;
