class Queue<T>{
    private data:T[] = [];

    enqueue(item: T){
        this.data.push(item);
    }

    dequeue(): T | undefined {
        return this.data.shift()
    }

    print(): void{
        console.log(this.data)
    }
}

const printQueue = new Queue<string>();

printQueue.enqueue("Jonathan");
printQueue.enqueue("Reddington");
printQueue.print();

printQueue.dequeue();
printQueue.print();