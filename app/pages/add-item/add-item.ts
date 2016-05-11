import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemPage {  
  title : string = "";
  description : string = "";
  
  constructor(private nav: NavController, private navParams : NavParams) {
  }
  
  saveItem() {
    let newItem = { title: this.title, description: this.description };
    
    this.navParams.get('homePage').saveItem(newItem);
    this.nav.pop();
  }
}
