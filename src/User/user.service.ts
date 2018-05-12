import {Component, Inject} from "@nestjs/common";

import {Repository} from "typeorm";
import {User} from "./user.entity";


@Component()

export class UserService {

    constructor(
      @Inject('UserRepositoryToken')
      private readonly userRepository: Repository<User>
    ){}


    create(user: User) {

    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}