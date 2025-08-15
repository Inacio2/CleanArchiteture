export type ProductProps = {
    id : string;
    name : string;
    price : number;
    quantity : number;
}

export class Product  {

    private constructor (private props: ProductProps){

        this.validate();

    }

    public static create (name: string, price:number){
        return new Product ({
            id: crypto.randomUUID().toString(),
            name,
            price,
            quantity: 0
        })
    }

    public static with (props : ProductProps){
        return new Product(props) ;
    }

    private validate (){
        if(this.props.quantity < 0){
            throw new Error("Product quantity shoul be positive");
        }
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get price(){
        return this.props.price;
    }

    public get quantity(){
        return this.props.quantity;
    }

    public increaseQuantiry(quantity : number){
        return this.props.quantity += quantity
    }

    public decreaseQuantiry(quantity : number){
        return this.props.quantity -= quantity
    }

}