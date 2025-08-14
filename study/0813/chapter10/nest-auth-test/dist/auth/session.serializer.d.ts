import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
export declare class SessionSerializer extends PassportSerializer {
    private userService;
    constructor(userService: UserService);
    serializeUser(user: any, done: (err: any, user: any) => void): any;
    deserializeUser(payload: any, done: Function): Promise<any>;
}
