
// enum ReferralStatus{
//     draft = "DRAFT",
//     sent = "SENT",
//     reviewed = "REVIEWED",
//     completed = "COMPLETED"
// }

// interface Referral{
//     id:number;
//     status: ReferralStatus;
// }

// function logStatus(obj: Referral): void{
//     console.log(`Referral ${obj.id} is currently ${obj.status}`)
// }

// logStatus({id: 123, status: ReferralStatus.completed})

// const enum Color {red = "#ff0000"}
// console.log(Color.red);


// enum Priority{
//     Low = 1,
//     Medium,
//     High
// }

// function getPriorityName(input: number): string{
//     const props = Object.keys(Priority);
//     if(props.includes(input.toString())) return Priority[input];
//     return "Unknown Priority";
// }

// console.log(getPriorityName(2));