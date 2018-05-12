import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:500 })
    username: string;

    @Column({length: 500})
    firstname: string;

    @Column()
    midname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @Column()
    dob: string;

    @Column()
    role: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column('text')
    address: string;

}