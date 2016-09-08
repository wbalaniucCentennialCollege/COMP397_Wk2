module objects{
    export class Student extends Person {
        private _studentNum : number;

        constructor(name:string, studentNum:number) {
            super(name);
            this._studentNum = studentNum;
        }

        public studies() : void {
            console.log(this._name + " is studying");
        }
    }
}