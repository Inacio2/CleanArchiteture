export type ProductProps = {
    id : string;
    name : string;
    price : number;
    quantity : number;
}

export class product  {

    private constructor (private props: ProductProps){

    }

    public static create (name: string, price:number){
        return new product ({
            id: crypto.randomUUID().toString(),
            name,
            price,
            quantity: 0
        })
    }

}