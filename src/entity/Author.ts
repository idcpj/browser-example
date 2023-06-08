import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import {Post} from "./Post";

@Entity()
export class Author {

    @PrimaryGeneratedColumn({type:"int"})
    id: number;

    @Column({type:"varchar"})
    name: string;

    @Column({nullable: true,type:"date"},)
    birthdate: Date;

    @OneToMany(type => Post, post => post.author)
    posts: Post[];
}
