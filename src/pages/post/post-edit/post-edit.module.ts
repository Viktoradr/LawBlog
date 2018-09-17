import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostEditPage } from './post-edit';

@NgModule({
  declarations: [
    PostEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PostEditPage),
  ],
  exports: [
    PostEditPage
  ]
})
export class PostEditPageModule {}
