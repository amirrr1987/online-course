import { CoreEntity } from '../../core.entity';
import { Course as CourseEntity } from '../../courses/entities/course.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  value: string;

  @ManyToMany(() => CourseEntity)
  @JoinTable({
    name: 'categories_courses',
    joinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses: CourseEntity[];
}
