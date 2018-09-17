import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PostListPageModule } from './../post/post-list/post-list.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    PostListPageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
