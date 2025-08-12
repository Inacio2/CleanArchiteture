import { PrismaClient } from "../../../../node_modules/.prisma/client/default";
import { product, product, product } from "../../../domain/product/entity/product";
import { ProductGateway } from "../../../domain/product/gateway/gateway.product";

export class ProductRepositoryPrismas implements ProductGateway{

    private constructor(private readonly prismaClient: PrismaClient){

    }

    public static create(prismaClient : PrismaClient){
        return new ProductRepositoryPrismas(prismaClient);
    }

    public async save(Product: product): Promise<void> {
        const data = {
            id : Product.id,
            name : Product.name,
            price : Product.price,
            quantity : Product.quantity
        }

        await this.prismaClient.product.create({
            data,
        })
    }
    public async list(): Promise<product[]> {

        const products = await this.prismaClient.product.findMany();

        const productList = products.map((p) =>{
            const product = Product.with({
                id : p.id,
                name : p.
            })
        })
    }
    
}