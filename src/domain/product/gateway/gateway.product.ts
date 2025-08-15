import { Product } from "../entity/product";

export interface ProductGateway {
    save(Product : Product) : Promise<void>;
    list(): Promise<Product[]>;
    
}