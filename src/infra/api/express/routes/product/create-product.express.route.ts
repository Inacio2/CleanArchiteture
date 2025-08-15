import { Request, Response } from "express"
import { CreateProductUsecase } from "../../../../../usecases/create-product/create-product.usecase"
import { HttpMethod, Route } from "../route"

export type CreateProductResponseDto = {
    id : string
}

export class CreateProductRoute implements Route {
    private constructor (
        private readonly path : string,
        private readonly method : HttpMethod,
        private readonly createProductService: CreateProductUsecase

    ){}

    public static create (createProductService: CreateProductUsecase){
        return new CreateProductRoute(
            "/products",
            HttpMethod.POST,
            createProductService
        )
    }

    public getHandler (request: Request, response : Response){
        
    }
}