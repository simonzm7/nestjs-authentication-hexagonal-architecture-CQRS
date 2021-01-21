import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";



@Catch()
export class HttpExceptionFilter implements ExceptionFilter<HttpException>{

    catch(exception : HttpException, host : ArgumentsHost){
        const ctx = host.switchToHttp();
        const response  = ctx.getResponse<Response>();
        try{
            response.status(exception.getStatus()).json(exception.getResponse());
        }catch{}
    }
}