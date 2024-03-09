import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    private counter = {
        get: 0,
        post: 0
    };

    use(req: Request, res: Response, next: NextFunction) {
        if(req.method === "GET") this.counter.get++
        if(req.method === "POST") this.counter.post++
        console.log(this.counter);
        next();
    }
}