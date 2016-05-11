import {Page, NavController, NavParams} from 'ionic-angular';
import { Item } from '../../item';

@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})

export class AddItemPage {
  item : Item = new Item("","");  
  
  constructor(private nav: NavController, private navParams : NavParams) {
  }
  
  saveItem() {    
    this.navParams.get('homePage').saveItem(this.item);
    this.nav.pop();
  }
}
