import {Component, Inject} from "@nestjs/common";

import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {User} from "./Interface/user.interface";


@Component()

export class UserService {

    constructor(
      @Inject('UserRepositoryToken')
      private readonly userRepository: Repository<UserEntity>
    ){}


    public async createUser(user: User): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    public async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }
}