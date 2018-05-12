import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {Module} from "@nestjs/common";
import {DatabaseModule} from "../Database/database.module";
import {userProviders} from "./user.providers";


@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    components: [
        UserService,
        userProviders
    ],
    exports: [
        DatabaseModule
    ]
})

export class UserModule {}