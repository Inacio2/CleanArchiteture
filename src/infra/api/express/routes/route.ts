import { promises } from "dns";
import { Request } from "express";

export type HttpMethod = "get" | "post";

export const HttpMethod = {

    GET: "get" as HttpMethod,
    POST: "pos" as HttpMethod

} as const;

export interface Route {
    getHandler() : (request : Request, response : Response) => Promise<void>;
    getPath(): string;
    getMethod: HttpMethod;
}

