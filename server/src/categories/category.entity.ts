import { CoreEntity } from 'src/core.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends CoreEntity {
  @Column()
  label: string;

  @Column({ unique: true })
  value: string;
}
