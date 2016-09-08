module objects {
    export class Person {
        // Good practice to have a _ in front of your PRIVATE variables
        protected _name : string;

        // TypeScript has a constructor Keyword
        constructor(name:string) {
            this._name = name;
        }

        // Notice the different in syntax
        public speak() : void {
            console.log(this._name + " says hello!");
        }
    }
}