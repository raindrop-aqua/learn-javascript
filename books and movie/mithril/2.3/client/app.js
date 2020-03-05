
var Todo = function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

Todo.list = function () {
    var tasks = [];
    var src = localStorage.getItem("todo");
    if (src) {
        var json = JSON.parse(src);
        for (var i = 0; i < json.length; i++) {
            tasks.push(new Todo(json[i]));
        }
    }
    return m.prop(tasks);
};

Todo.save = function (todoList) {
    localStorage.setItem("todo",
        JSON.stringify(todoList.filter(function (todo) {
            return !todo.done();
        })));
};

var vm = {
    init: function () {
        vm.list = Todo.list();
        vm.description = m.prop("");
        vm.add = function () {
            if (vm.description()) {
                vm.list().push(new Todo({description: vm.description()}));
                vm.description("");
                Todo.save(vm.list());
            }
        }
    },
    check: function(value) {
        this.done(value);
        Todo.save(vm.list());
    }
};

function controller() {
    vm.init();
}

function view() {
    return m("div", [
        m("input", {
            onchange: m.withAttr("value", vm.description),
            value: vm.description()
        }),
        m("button", {onclick: vm.add}, "追加"),
        m("table", vm.list().map(function (task) {
            return m("tr", [
                m("td", [
                    m("input[type=checkbox]", {onclick: m.withAttr("checked", vm.check.bind(task)), value: task.done()})
                ]),
                m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}}, task.description())
            ]);
        }))
    ]);
}

m.mount(document.getElementById("root"), {controller: controller, view: view});

