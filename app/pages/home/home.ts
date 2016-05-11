import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';

/// TODONEXT: Define an Item Class and use it for this project
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items : any[] = [];
    
  constructor(private nav : NavController) {}
  
  addItem() {
    this.nav.push(AddItemPage, {homePage: this});
  }
  
  saveItem(item : any){
    this.items.push(item);
  }
  
  viewItem(item : any) {
    this.nav.push(ItemDetailPage, {item :item});
  }
}
