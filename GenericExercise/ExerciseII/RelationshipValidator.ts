interface Relationship<T, K extends keyof T>{
    source: T,
    foreignKey: K
}


interface Member{
    studentId: string;
    role: string
}

const valRel: Relationship<Member, "role"> = {
    source: {studentId: "101", role: "Class Monitor"},
    foreignKey: "role",
}
