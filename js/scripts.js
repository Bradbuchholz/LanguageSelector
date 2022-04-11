$(document).ready(function() {
  $("form#picker").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const experience = $("select#experience").val();
    const pets = $("select#pets").val();
    const seasons = $("select#seasons").val();
    const flavor = $("select#flavor").val()
    if (age >="40" && experience === "no" && pets === "cat" && seasons === "spring" && flavor === "vanilla") {
      $('.program-option').addClass('display-none');
      $('#ruby').removeClass('display-none');
    } else if (age <="40" && experience === "yes" && pets === "dog" && seasons === "summer" && flavor === "chocolate") {
      $('.program-option').addClass('display-none');
      $('#swift').removeClass('display-none');
    } else if (age <= "20" && experience === "no" && pets === "cat" && seasons === "spring" && flavor === "vanilla") {
      $('.program-option').addClass('display-none');
      $('#javaScript').removeClass('display-none');
    } else {
      $('.program-option').addClass('display-none');
    
    }
  })

});