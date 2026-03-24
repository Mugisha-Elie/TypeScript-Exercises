interface Student{
    id:number;
    name:string;
    major:string;
}

interface ClubLeader extends Student{
    role:string
}

const regularStudent: Student = {
    id: 100,
    name: "Davido",
    major: "Music $ Art Engineering"
}

const leadStudent: ClubLeader = {
    id:101,
    name: "Davidu",
    major: "Some weird major",
    role: "Some role",
}