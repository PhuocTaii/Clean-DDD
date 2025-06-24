import { Class } from "src/domain/class/entities/class.entity";
import { Email } from "../value-objects/email.value-object";

export class User {
    constructor(
        public readonly id: string,
        public name: string,
        public email: Email,
        public classes: Class[] = [],
    ) {}

    public joinClass(cls: Class): void{
        if (this.classes.find(c => c.id === cls.id)) {
            throw new Error('User already joined this class.');
        }

        this.classes.push(cls);
    }
}