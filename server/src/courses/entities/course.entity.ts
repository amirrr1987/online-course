import { Category as CategoryEntity } from 'src/categories/entities/category.entity';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { CoreEntity } from 'src/core.entity';
import { Entity, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'courses' })
export class Course extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  value: string;

  @ManyToMany(() => UserEntity, (user) => user.courses)
  users: UserEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.courses)
  categories: CategoryEntity[];
}
