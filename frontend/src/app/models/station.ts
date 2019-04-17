import { Bike } from './bike';

export class Station {
  _id: string;
  name: string;
  state: string;
  description: string;
  bikes : Bike[];
  static _id: any;

  constructor(_id = '', name = '', state = '', description = '', bikes: null) {
    this._id = _id;
    this.name = name;
    this.state = state;
    this.description = description;
    this.bikes = bikes;
  }
}
