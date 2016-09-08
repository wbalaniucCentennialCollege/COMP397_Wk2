var objects;
(function (objects) {
    var Person = (function () {
        // TypeScript has a constructor Keyword
        function Person(name) {
            this._name = name;
        }
        // Notice the different in syntax
        Person.prototype.speak = function () {
            console.log(this._name + " says hello!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map