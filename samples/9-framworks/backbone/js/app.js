Person = Backbone.Model.extend({});
PersonView = Backbone.View.extend({
  el: "#person",
  events: {
    "keyup": "change"
  },
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
    this.render();
  },
  change: function () {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    this.model.set({firstName: firstName, lastName: lastName});
  },
  render: function () {
    $("#firstName").val(this.model.get("firstName"));
    $("#lastName").val(this.model.get("lastName"));
    var fullName = this.model.get("firstName")
                 + " "
                 + this.model.get("lastName");
    $("#fullName").text(fullName);
  }
});

person = new Person({lastName: "Yamada", firstName: "Taro"});
personView = new PersonView({model: person});