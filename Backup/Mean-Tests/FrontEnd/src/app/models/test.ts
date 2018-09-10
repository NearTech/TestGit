export class Test {

    constructor(_id = '', name= '', condition='', age=0)
    {
        this._id = _id;
        this.name= name;
        this.condition = condition;
        this.age = age;
    }

    _id: string;
    name: string;
    condition: string;
    age: number;
}
