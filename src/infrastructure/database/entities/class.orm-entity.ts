// infrastructure/database/entities/class.orm-entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserOrmEntity } from '../entities/user.orm-entity';

@Entity('classes')
export class ClassOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => UserOrmEntity, (user) => user.classes)
  users: UserOrmEntity[];
}
