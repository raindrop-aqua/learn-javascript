"use strict";

var m = require("mithril");

var bootstrapModule = {
    controller: function () {},
    view: function () {
        return [
            m(".container", [
                m(".page-header", [
                    m("h1", "Alerts")
                ]),
                m(".alert.alert-success[role='alert']", [
                    m("strong", "Well done!"),
                    " You successfully read this important alert message.\n "
                ]),
                m(".alert.alert-info[role='alert']", [
                    m("strong", "Heads up!"),
                    " This alert needs your attention, but it's not super important.\n      "
                ]),
                m(".alert.alert-warning[role='alert']", [
                    m("strong", "Warning!"),
                    " Best check yo self, you're not looking too good.\n      "
                ]),
                m(".alert.alert-danger[role='alert']", [
                    m("strong", "Oh snap!"),
                    " Change a few things up and try submitting again.\n      "
                ])
            ])
        ];
    }
};

if (typeof document !== "undefined") {
    m.mount(document.getElementById("root"), bootstrapModule);
}
