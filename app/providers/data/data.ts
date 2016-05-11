import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from 'angular2/core';

@Injectable()
export class Data {
  data: any = null;
  storage = new Storage(SqlStorage, {name:'todo'})

  constructor() {}

  getData() {
    return this.storage.get('todos');
  }
  
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos',newData);
  }
}

