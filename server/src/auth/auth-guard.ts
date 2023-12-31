import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor (private jwtService: JwtService, private authService: AuthService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()    
        try {
            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]
            
            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: "User is unauthorized"})
            }

            const user = this.jwtService.verify(token)
            
            req.user = user

            return true
        } catch (error) {
            console.log(error)
            throw new UnauthorizedException({message: "User is unauthorized"})
        }
    }
}