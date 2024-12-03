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
  Check,
  RelationId,
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
  @Check('age >= 18')
  age: number;

  @ManyToMany(() => CourseEntity, { onDelete: 'CASCADE', eager: true })
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
  @JoinColumn({
    name: 'role_id',
  })
  role: RoleEntity;

  @RelationId((user: User) => user.courses)
  courses_id: number[];

  @RelationId((user: User) => user.role)
  role_id: number;
}
