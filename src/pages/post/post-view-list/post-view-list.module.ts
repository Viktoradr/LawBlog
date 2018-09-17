import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostViewListPage } from './post-view-list';
import { PostListPageModule } from '../post-list/post-list.module';

@NgModule({
  declarations: [
    PostViewListPage
  ],
  imports: [
    PostListPageModule,
    IonicPageModule.forChild(PostViewListPage),
  ],
})
export class PostViewListPageModule {}
