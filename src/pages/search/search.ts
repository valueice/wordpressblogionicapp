import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = "";
  Posts: any = [];
  private per_page: number= 5;
  private page:number = 1;
  private showLoadMore = false;
  private isLoading = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api:ApiProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onSearch(){
    this.Posts = [];
    this.showPost();
    console.log(this.searchQuery);
  }

  showPost(){
    if(!this.isLoading && this.searchQuery.length > 0){
      this.isLoading = true;
  this.api.getArticles('posts?_embed&per_page='+this.per_page + "&page=" + this.page+'&search='+this.searchQuery)
  .subscribe((posts:any) => {
    console.log(posts);
    this.isLoading = false;
    this.Posts = this.Posts.concat(posts);
    if (posts.length===this.per_page){
      this.page ++;
      this.showLoadMore = true;
    }
  }, (error) => {
    if(error){
      this.showLoadMore = false;
    }
    console.log(error);
  });
}
}

clearSearch(){
  this.searchQuery = "";
  this.Posts = [];
  this.page = 1;
  this.showLoadMore = false;
}

readPost(p){
  this.navCtrl.push(DetailPage, {article:p});
}

}
