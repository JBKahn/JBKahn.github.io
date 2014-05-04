function submitContactForm() {
  $('.has-error').removeClass('has-error');
  $('.contact-submit').addClass('disabled');
  $.ajax({
    url: "http://orlywaldman.com/contact/jbkahn/form_submit/",
    type: 'POST',
    data: {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val(),
    },
    dataType: 'json'
  }).fail(function (data, textStatus, jqXHR) {
        for (var key in data.responseJSON.errors) {
           $('#' + key).parent().addClass('has-error');
        }
        $('.contact-submit').removeClass('disabled');
  }).done(function (data, textStatus, jqXHR) {
    $('.contact-submit').remove()
  });
}
