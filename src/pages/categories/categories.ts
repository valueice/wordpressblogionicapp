import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { PostsPage } from '../posts/posts';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  Categories: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api:ApiProvider) { 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  
    this.api.getCat().subscribe((Cats) =>{
      this.Categories = Cats;
      console.log('the posts cats', this.Categories);
    });
    
  }

  openCat(c){
    this.navCtrl.push(PostsPage, {c:c});
    console.log('this is category Posts',c )
  }
 
}
