export class Unassigned {
  name: string;
  kms: number;
  description: string;
  assigned: boolean;

  constructor(name: string = '', kms: number = null, description: string = '', assigned: boolean = false) {
    this.name = name;
    this.kms = kms;
    this.description = description;
    this.assigned = assigned;

  }

}
