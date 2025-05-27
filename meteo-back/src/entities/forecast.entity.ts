import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  insee: string;

  @Column()
  details: string;
}