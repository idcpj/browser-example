import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import {Category} from "./Category";
import {Author} from "./Author"

@Entity()
export class Post {

    @PrimaryGeneratedColumn({type:"int"})
    id: number;

    @Column({type:"varchar"})
    title: string;

    @Column({type:"text"})
    text: string;

    @ManyToMany(type => Category, {
        cascade: true
    })
    @JoinTable()
    categories: Category[];

    @ManyToOne(type => Author, author => author.posts, {
        cascade: true
    })
    author: Author;
}
