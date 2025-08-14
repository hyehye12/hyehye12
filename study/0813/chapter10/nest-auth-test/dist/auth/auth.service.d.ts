import { CreateUserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";
import { User } from "src/user/user.entity";
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    register(userDto: CreateUserDto): Promise<Omit<User, "password">>;
    validateUser(email: string, password: string): Promise<{
        id?: number;
        email: string;
        username: string;
        createdDt: Date;
    } | null>;
}
