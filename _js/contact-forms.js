$("#main-contact-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
//   $.post($form.attr("action"), $form.serialize()).then(function() {
//     alert("Thank you!");
//   });
//   
  $.ajax({
    type: 'POST',
    url: $form.attr("action"),
    data: $form.serialize(),
    success: function( data ) {
        alert("Thank you!, successfully sended");
    },
    error: function(xhr, status, error) {
        alert("An error occur!\n" + status + "\n" + error);
    },
    dataType: 'text'
  });
}); 

