var ractive = new Ractive({
  el: "container",
  template: "#tpl",
  data: {
    firstName: "Taro",
    lastName: "Yamada",
    fullName: function () {
      return this.get("firstName") + " " + this.get("lastName");
    }
  }
});