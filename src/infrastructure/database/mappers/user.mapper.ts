// infrastructure/database/mappers/user.mapper.ts
import { User } from 'src/domain/user/entities/user.entity';
import { UserOrmEntity } from '../entities/user.orm-entity';
import { ClassMapper } from './class.mapper';

export class UserMapper {
  static toDomain(orm: UserOrmEntity): User {
    return new User(
      orm.id,
      orm.name,
      orm.email,
      orm.classes?.map(ClassMapper.toDomain) || [],
    );
  }

  static toOrm(domain: User): UserOrmEntity {
    const orm = new UserOrmEntity();
    orm.id = domain.id;
    orm.name = domain.name;
    orm.email = domain.email;
    orm.classes = domain.classes.map(ClassMapper.toOrm);
    return orm;
  }
}
