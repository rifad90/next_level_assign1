
const filterEvenNumbers=(numberArr:number[])=>{
const evenArr:number[]=[];
numberArr.forEach(num=>{
    if(num%2===0){
        evenArr.push(num);
    }
});
return evenArr;
}

const reverseString=(str:string)=>{
    let revStr = "";

    for (let i = -1; i >= -str.length; i--) {
        revStr += str.at(i);
    }

    return revStr;
}

const checkType=(StringOrNumber: string|number)=>{
    if(typeof(StringOrNumber)=="string"){
        return "String";
    }else{
        return "Number";
    }
}
type User={
    id:number;
    name:string;
    age:number;
}
const getProperty=(user:User, key: keyof User)=>{
    return user[key];
}
const user = { id: 1, name: "John Doe", age: 21 };

interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
const toggleReadStatus = (
    book: Book
): Book & { isRead: boolean } => {
    return {...book,
        isRead: true
    };
};
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

class Person{
    name:string;
    age:number;
    constructor(name:string, age: number){
        this.name=name;
        this.age=age;
    }
}
class Student extends Person{
    grade:string;
    constructor(name:string, age:number,grade:string){
        super(name, age);
        this.grade=grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");


const getIntersection=(numArr1:number[], numArr2:number[])=>{
    const commonArr:number[]=[];

    numArr1.map(number=>{
        if(numArr2.includes(number)){
            commonArr.push(number);
        }
    });
    return commonArr;
}


console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));