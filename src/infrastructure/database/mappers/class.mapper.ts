// infrastructure/database/mappers/user.mapper.ts

import { Class } from "src/domain/class/entities/class.entity";
import { ClassOrmEntity } from "../entities/class.orm-entity";
import { UserMapper } from "./user.mapper";

export class ClassMapper {
  static toDomain(orm: ClassOrmEntity): Class {
    return new Class(
      orm.id,
      orm.title,
      orm.users?.map(UserMapper.toDomain) || [],
    );
  }

  static toOrm(domain: Class): ClassOrmEntity {
    const orm = new ClassOrmEntity();
    orm.id = domain.id;
    orm.title = domain.title;
    orm.users = domain.users.map(UserMapper.toOrm);
    return orm;
  }
}
