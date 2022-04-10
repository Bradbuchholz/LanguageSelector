$(document).ready(funtion() {
  $("form#programming").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").valueOf());
    const experience = $("select#experience").val();
    const pets = $("select#pets").val();
    const seasons = $("select#seasons").val();
    const flavor = $("select#flavor").val();

    if (age >=40 && experience === "no" && pets === "cat" && seasons === "spring" && flavor === "vanilla") {
      $('.program-option').addClass('display-none');
      $('#ruby').removeClass('display-none');
    }
  }

}