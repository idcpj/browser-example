import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn({type:"int"})
    id: number;

    @Column({type:"varchar"})
    name: string;

}
