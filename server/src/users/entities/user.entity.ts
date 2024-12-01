import { CoreEntity } from 'src/core.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
// import { Course } from './course.entity';
import { Role } from 'src/roles/entities/role.entity';

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

  @ManyToMany(() => Course, (course) => course.roles)
  @JoinTable()
  courses: Course[];

  @ManyToMany(() => Role, (role) => role.courses)
  @JoinTable()
  roles: Role[];
}
