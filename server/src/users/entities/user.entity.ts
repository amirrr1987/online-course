import { CoreEntity } from 'src/core.entity';
import { Course } from 'src/courses/entities/course.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, ManyToMany, JoinTable, OneToOne } from 'typeorm';

@Entity({ name: 'users' })
export class User extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  first_name: string;

  @Column({ type: 'varchar', length: 255 })
  last_name: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  mobile: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @ManyToMany(() => Course, (course) => course.id)
  @JoinTable()
  courses: Course[];

  @OneToOne(() => Role, (role) => role.id)
  @JoinTable()
  roles: Role;
}
