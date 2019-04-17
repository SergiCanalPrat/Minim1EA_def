export class Unassigned{
  _id : string;
  name: string;
  kms: number;
  description: string;
  assigned: boolean;

  constructor(_id: string, name: string = '', kms: number = null, description: string = '', assigned: boolean = false) {
    this._id = _id;
    this.name = name;
    this.kms = kms;
    this.description = description;
    this.assigned = assigned;

  }

}
