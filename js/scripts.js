$(document).ready(function() {
  $("form#programming").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").valueOf());
    console.log // for debugging
    const experience = $("select#experience").val();
    console.log // for debugging
    const pets = $("select#pets").val();
    console.log // for debugging
    const seasons = $("select#seasons").val();
    console.log // for debugging
    const flavor = $("select#flavor").val();
    console.log // for debugging 
    $("#result").show();

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