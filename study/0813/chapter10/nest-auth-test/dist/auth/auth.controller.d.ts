import { CreateUserDto } from "src/user/user.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userDto: CreateUserDto): Promise<Omit<import("../user/user.entity").User, "password">>;
    login(req: any, res: any): Promise<any>;
    login3(req: any): any;
    testGuardWithSession(req: any): any;
}
