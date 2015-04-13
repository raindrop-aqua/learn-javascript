App = Ember.Application.create();
App.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: function () {
    return this.get("firstName") + " " + this.get("lastName");
  }.property("firstName", "lastName")
});

var person = App.Person.create({
  firstName: "Taro",
  lastName: "Yamada"
});

App.Router.map(function () {
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return person;
  }
});