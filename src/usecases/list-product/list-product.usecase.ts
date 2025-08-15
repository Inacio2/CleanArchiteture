import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/gateway.product";
import { Usecase } from "../usecases";

export type ListProductInputDto = void;

export type ListProductOutputDto = {
    product: {
        id: string,
        price : number,
        name : string,
        quantity : number
    }[];

}

export class ListProductUsecase 
    implements Usecase<ListProductInputDto,ListProductOutputDto>{
        private constructor(private readonly productGateway: ProductGateway){}

        public static create(productGateway : ProductGateway){
            return new ListProductUsecase(productGateway);
        }

        public async execute(): Promise<ListProductOutputDto> {

            const aProduct = await this.productGateway.list()

            const output = this.presentOutput(aProduct);

            return output;
            
        }

        private presentOutput(products: Product[]) : ListProductOutputDto{
            return{
                product
                 : products.map((p) =>{
                    return{

                        id : p.id,
                        name : p.name,
                        price : p.price,
                        quantity : p.quantity,

                    }
                })
            }
        }
    }