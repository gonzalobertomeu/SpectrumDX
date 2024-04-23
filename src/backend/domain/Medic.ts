import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Medic {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
}