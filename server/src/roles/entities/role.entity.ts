import { CoreEntity } from 'src/core.entity';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { Entity, Column, OneToOne, JoinTable, JoinColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class Role extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ unique: true, type: 'varchar' })
  value: string;

  @OneToOne(() => UserEntity, (user) => user.id)
  @JoinColumn()
  user: UserEntity;
}
