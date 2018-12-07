import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { SearchPage } from '../search/search';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  Posts: any = [];
  private per_page: number= 5;
  private page:number = 1;
  public showLoadMore:boolean = false;
  private isLoading: boolean = false;
  private category : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api:ApiProvider
    
    ) {
      if(this.navParams.get('c')!=null && this.navParams.get('c') !=0){
        this.category = this.navParams.get('c');
        console.log('this is category Posts on post page', this.category)
      }

      this.showPost();

  }      
  
      showPost(){
        if(!this.isLoading){
          this.isLoading = true;
      this.api.getArticles('posts?_embed&per_page='+this.per_page + "&page=" + this.page +(this.category!=0 ? '&categories='+this.category:''))
      .subscribe((posts:any) => {
        console.log('this are post',posts);
        this.isLoading = false;
        this.Posts = this.Posts.concat(posts);
        if (posts.length===this.per_page){
          this.page++;
          this.showLoadMore = true;
        }

        if (posts.length < this.per_page){
          this.showLoadMore = false;
        }
      }, (error) => {
        console.log('this is err ',error);
        if(error.error){
          this.showLoadMore = false;
        }
        console.log(error);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  readPost(p){
    this.navCtrl.push(DetailPage, {article:p});
  }


  openSearch(){
    this.navCtrl.push(SearchPage);
  }


}
