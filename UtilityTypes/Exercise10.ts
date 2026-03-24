interface ClubMember<T>{
    name:string,
    roleDetails: T
}

const member:ClubMember<{department:string, isLead:boolean}> = {
    name: "Hassan",
    roleDetails: {
        department: "DevOps department",
        isLead: false
    }
}
