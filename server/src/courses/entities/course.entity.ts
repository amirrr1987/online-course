import { CoreEntity } from 'src/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'courses' })
export class Course extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  value: string;

  @ManyToMany(() => User, (course) => course.id)
  user: User;
}
