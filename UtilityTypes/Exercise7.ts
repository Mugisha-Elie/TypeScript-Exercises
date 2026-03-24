class Student{
    constructor(private id:number, private name:string){}

    public getName(){
        return this.name;
    }

    public getId(){
        return this.id;
    }

    public setName(name:string):string{
        this.name = name;
        return name;
    }
}

const student1 = new Student(1, "John Doe");
const student2 = new Student(2, "Jane Doe");
const student3 = new Student(3, "Ted Lasso")



interface PaginatedResult<T>{
    items: T[],
    totalCount:number,
    currentPage:number
}

const results: PaginatedResult<Student> = {
    items: [student1, student2, student3],
    totalCount: 3, 
    currentPage: 1
}

console.log(results);