import { CoreEntity } from 'src/core.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User extends CoreEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  mobile: string;
}
