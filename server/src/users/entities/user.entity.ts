import { CoreEntity } from 'src/core.entity';
import { Course as CourseEntity } from 'src/courses/entities/course.entity';
import { Role as RoleEntity } from 'src/roles/entities/role.entity';
import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';

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

  @ManyToMany(() => CourseEntity)
  @JoinTable({
    name: 'users_courses',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses: CourseEntity[];

  @OneToOne(() => RoleEntity, (role) => role.id)
  @JoinColumn()
  role: RoleEntity;
}
