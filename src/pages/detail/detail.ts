import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public article: any = [];
  public isLoading: boolean = false;
  public relatedPosts: any [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api: ApiProvider,
  ) {

  this.article = navParams.get('article')
    console.log(this.article);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');

    this.getRelated();
  }

  getRelated(){
    if(!this.isLoading){
      this.isLoading = true;
  this.api.getArticles('posts?_embed&categories=' + this.article.categories)
  .subscribe((posts:any) => {
    console.log('related articles',posts);
    this.isLoading = false;
    this.relatedPosts = posts;
    
  }, (error) => {
    if(error){
      this.isLoading = false;
    }
    console.log(error);
  });
}
  }

  readPost(p){
    this.navCtrl.push(DetailPage, {article:p})
  }

}
