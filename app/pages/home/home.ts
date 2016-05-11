import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import { Item } from '../../item';
import {Data} from '../../providers/data/data';
import {NgZone} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items : Item[] = [];
    
  constructor(private nav : NavController, private dataService : Data, private zone : NgZone) {
    this.dataService.getData().then((todos) =>
    {
      if (todos){
        this.zone.run(() => {
            this.items = JSON.parse(todos)
          });
      }
    });
  }
  
  addItem() {
    this.nav.push(AddItemPage, {homePage: this});
  }
  
  saveItem(item : Item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
  
  viewItem(item : Item) {
    this.nav.push(ItemDetailPage, {item :item});
  }
}
