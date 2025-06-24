// domain/class/entities/class.entity.ts
import { User } from 'src/domain/user/entities/user.entity';

export class Class {
  constructor(
    public readonly id: string,
    public title: string,
    public users: User[] = [],
  ) {}
}
