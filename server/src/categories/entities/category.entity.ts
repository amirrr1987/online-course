import { CoreEntity } from 'src/core.entity';
import { Course as CourseEntity } from 'src/courses/entities/course.entity';
import { Entity, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  value: string;

  @ManyToMany(() => CourseEntity, (course) => course.id)
  courses: CourseEntity[];
}
