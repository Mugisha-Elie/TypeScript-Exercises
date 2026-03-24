class TicketSystem{
    private static totalTicketsSold: number = 0;
    
    constructor(public eventName:string){}

    sellTicket():void{
        TicketSystem.totalTicketsSold += 1;
        console.log(`${TicketSystem.totalTicketsSold} ticket(s) sold for${this.eventName}`)
    }

    public static getTotalSales():string{
        return `Total tickets sold across all events are ${TicketSystem.totalTicketsSold}`;
    }
}

const concert = new TicketSystem("Rock Concert");
const game = new TicketSystem("Basketball Game");

concert.sellTicket();
game.sellTicket();
concert.sellTicket();
game.sellTicket();
game.sellTicket();

console.log(TicketSystem.getTotalSales());