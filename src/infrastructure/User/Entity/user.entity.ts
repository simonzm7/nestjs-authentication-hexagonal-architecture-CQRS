import {  PrimaryGeneratedColumn, Column, Entity  } from 'typeorm';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    user_level :  string;

    @Column()
    createdAt:  Date;
}



