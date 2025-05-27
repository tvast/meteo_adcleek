import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  insee: string;

  @Column()
  name: string;

  @Column()
  zipcode: string;

  @Column()
  population: number;
}