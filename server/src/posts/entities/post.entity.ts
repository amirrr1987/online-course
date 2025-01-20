import { Column, Entity, ManyToMany } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { CoreEntity } from '../../config/core.entity';

@Entity({ name: 'posts' })
export class PostEntity extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({ nullable: false, unique: true })
  slug: string;

  @ManyToMany(() => UserEntity, (user) => user.id)
  user: UserEntity[];

  @Column({ nullable: true })
  description: string;
}
