interface ICustomer {
  name: string;
  age: number;
  breed: string;
}

export class Customer {
  name: string;
  age: number;
  breed: string;

  constructor({ name, age, breed }: ICustomer) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
