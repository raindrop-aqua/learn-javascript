function updateFullName() {
  var fullName = $("#firstName").val() + " " + $("#lastName").val();
  $("#fullName").text(fullName);
}
$("#firstName, #lastName").bind("change keyup", function () {
  updateFullName();
});

$("#firstName").val("Taro");
$("#lastName").val("Yamada");
updateFullName();
