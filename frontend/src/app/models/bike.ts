export class Bike {
  name: string;
  kms: number;
  description: string;

  constructor(name: string = '', kms: number = null, description: string = '') {
    this.name = name;
    this.kms = kms;
    this.description = description;
  }

}
