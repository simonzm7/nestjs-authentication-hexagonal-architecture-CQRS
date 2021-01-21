import { HttpException, HttpStatus } from "@nestjs/common";



export class CreateException extends HttpException {
    constructor(message: {}, statusCode: HttpStatus) {
        super({
            message
        }, statusCode);
    }
}
