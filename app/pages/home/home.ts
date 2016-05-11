import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import { Item } from '../../item';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items : Item[] = [];
    
  constructor(private nav : NavController) {}
  
  addItem() {
    this.nav.push(AddItemPage, {homePage: this});
  }
  
  saveItem(item : Item){
    this.items.push(item);
  }
  
  viewItem(item : Item) {
    this.nav.push(ItemDetailPage, {item :item});
  }
}
