import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorypostsPage } from './categoryposts';

@NgModule({
  declarations: [
    CategorypostsPage,
  ],
  imports: [
    IonicPageModule.forChild(CategorypostsPage),
  ],
})
export class CategorypostsPageModule {}
