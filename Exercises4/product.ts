type Product = {
    id:number,
    name: string,
    price: number,
    discount?:number,
}

const book: Product = {
    id: 1,
    name: "The great gatsby",
    price: 33.23,
    discount: NaN
}

const pen: Product = {
    id: 2,
    name: "ball-point pen",
    price: 10
}

console.log(book);
console.log(pen);


type BlogPost = {
    title:string,
    content:string,
    tags: string[],
    comments: {user:string, message:string}[]
}

const blog:BlogPost = {
    title: "Computer Science",
    content: "Comuter Architecture",
    tags: ["cs", "programming", "code"],
    comments: [{user: "Kimenyi", message: "I like computer science"},]
}

console.log(blog)




type Order = {
    orderId:number,
    customer: {name:string, email:string},
    items: {productId:number, quantity: number, price:number},
    totalAmount: number,
    status: "processing" | "shipped" | "delivered"
}

type ApiResponse = {
    success: boolean,
    data: {id:number, name:string},
    error: string | null
}

type ErrorMessage = {
    [keys:string]: String
    // [keys:string]: string
}

const obj:ErrorMessage = {
    name: "Junior"
}
