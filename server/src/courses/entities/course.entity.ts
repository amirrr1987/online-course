import { Category as CategoryEntity } from '../../categories/entities/category.entity';
import { User as UserEntity } from '../../users/entities/user.entity';
import { CoreEntity } from '../../core.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'courses' })
export class Course extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  value: string;

  @Column({ nullable: false, unique: true })
  slug: string;

  @Column({ type: 'number', default: 0 })
  duration: number;

  @ManyToMany(() => UserEntity, (user) => user.id)
  users: UserEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.id)
  // @JoinTable({
  //   name: 'categories_courses',
  //   joinColumn: {
  //     name: 'category_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'course_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  categories: CategoryEntity[];
}
