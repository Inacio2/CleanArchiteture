import { product } from "../entity/product";

export interface ProductGateway {
    save(Product : product) : Promise<void>;
    list(): Promise<product[]>;
    
}