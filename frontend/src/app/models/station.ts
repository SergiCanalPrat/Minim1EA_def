export class Station {
  _id: string;
  name: string;
  state: string;
  description: string;
  static _id: any;

  constructor(_id = '', name = '', state = '', description = '') {
    this._id = _id;
    this.name = name;
    this.state = state;
    this.description = description;

  }
}
