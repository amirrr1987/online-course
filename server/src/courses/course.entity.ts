import { CoreEntity } from 'src/core.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'courses' })
export class Course extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  label: string;
  @Column({ unique: true })
  value: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  thumbnail: string;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column({ type: 'int', default: 0 })
  price: number;

  @Column({ type: 'boolean', default: false })
  isPublished: boolean;
}
