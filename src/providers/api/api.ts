import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  public Categories: any = [];

  private API_URL: string = 'http://smenetworkafrica.com/learn/wp-json/wp/v2/';
  //public Categories: any = [];

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get (query:string = ''){
    return this.http.get(this.API_URL + query)
  }

  getCat(){
    return this.http.get(this.API_URL + 'categories')
  }

  getCategories(){
    this.get('categories').subscribe((data) =>{
      this.Categories = data;
    })
  }

  getArticles(query:string = ""){
    return this.http.get(this.API_URL + query)
  }

  getPosts(){
    return this.http.get(this.API_URL + 'posts?_embed')
  }


} 

