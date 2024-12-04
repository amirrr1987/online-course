import { CoreEntity } from '../../core.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'roles' })
export class Role extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar' })
  value: string;
}
