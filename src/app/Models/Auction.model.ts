export class Auction{
    readonly date:Date;
    constructor(public askedBy:string, public askingPrice:number)
    {
        this.date = new Date();
    }
}