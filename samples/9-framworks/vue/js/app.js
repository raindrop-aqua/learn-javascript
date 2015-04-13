var vue = new Vue({
  el: "#person",
  data: {
    firstName: "Taro",
    lastName: "Yamada"
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      }
    }
  }
});