class Stack<T>{
    private elements:T[] = [];

    constructor(private size:number){}

    isEmpty():boolean{
        return this.elements.length === 0;
    }

    isFull():boolean{
        return this.elements.length === this.size;
    }

    pop():T{
        if(this.elements.length === 0){
            throw new Error("The Stack Empty!");
        }else{
            return this.elements.pop() as T;
        }
    }

    push(Element: T){
        if(this.elements.length === this.size){
            throw new Error("Stack Overflow");
        }else{
            this.elements.push(Element);
        }
    }
}

const stack = new Stack<string>(10);

stack.push("Name")
stack.push("Age");
stack.push("Gender");
stack.push("Name")
stack.push("Age");
stack.push("Gender");
stack.push("Name")
stack.push("Age");
stack.push("Gender");
// stack.push("Name")
// stack.push("Nationality")


const popped = stack.pop();
console.log(popped);

console.log("Stack is Empty: ", stack.isEmpty());
console.log("Stack is Full: ", stack.isFull());
console.log(stack);
