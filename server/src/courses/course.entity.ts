import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ unique: true })
  value: string;
}
