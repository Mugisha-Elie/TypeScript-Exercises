class Node{
    data:string;
    next:Node | null;

    constructor(data:string){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node("Alice");
const node2 = new Node("John");
const node3 = new Node("Jane");
const node4 = new Node("Tim");

node1.next = node2;
node2.next = node3;
node3.next = node4;

let nodeHead: Node | null = node1;

while(nodeHead != null){
    console.log(nodeHead.data);
    nodeHead = nodeHead.next;
}