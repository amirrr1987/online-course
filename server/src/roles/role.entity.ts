import { CoreEntity } from 'src/core.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'roles' })
export class Roles extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true })
  value: string;
}
