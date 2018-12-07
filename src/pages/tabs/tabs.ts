import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';
import { CategoriesPage } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostsPage;
  tab2Root = HomePage;
  tab3Root = CategoriesPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
