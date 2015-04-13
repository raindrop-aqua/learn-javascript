function AppViewModel() {
  this.firstName = ko.observable("Taro");
  this.lastName = ko.observable("Yamada");

  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);
};

ko.applyBindings(new AppViewModel());
