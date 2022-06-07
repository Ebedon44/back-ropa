import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ropa { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;
    @Column()
    marca: string;
    @Column()
    nombre:string;
    @Column()
    talla: string;
    @Column()
    costo: number;
    @Column()
    imagen: string;

}