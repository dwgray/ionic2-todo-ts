import {Page, NavParams} from 'ionic-angular';
import { Item } from '../../item';


@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {
  item : Item; 
  
  constructor(public navParams: NavParams) {
    this.item = this.navParams.get('item');
  }
}
