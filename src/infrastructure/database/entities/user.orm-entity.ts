// infrastructure/database/entities/user.orm-entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ClassOrmEntity } from './class.orm-entity';
import { Email } from 'src/domain/user/value-objects/email.value-object';

@Entity('users')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: Email;

  @ManyToMany(() => ClassOrmEntity, (cls) => cls.users)
  @JoinTable({
    name: 'user_classes',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'class_id', referencedColumnName: 'id' }
  })
  classes: ClassOrmEntity[];
}
