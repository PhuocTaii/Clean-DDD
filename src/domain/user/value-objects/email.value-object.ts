export class Email{
    constructor(private readonly value: string){
        if (!this.isValid(value)){
            throw new Error('Invalid email')
        }
    }

    private isValid(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    getValue(): string {
        return this.value;
    }

    equals(other: Email): boolean {
        return this.value === other.value;
    }
}