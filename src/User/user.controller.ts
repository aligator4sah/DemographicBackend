import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CreateUserDto} from "./DTO/create-user.dto";
import {UserService} from "./user.service";


@Controller('user')

export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async findAll(): Promise<any[]>{
        return this.userService.findAll();
    }


    @Get(':id')
    findUserId(@Param() params) {
        return {};
    }

    // @Post()
    // createUser(@Body() createUserDto: CreateUserDto) {
    //     this.userService.create(createUserDto);
    // }
}