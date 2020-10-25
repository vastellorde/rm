import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PostListComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostListComponent,
      },
      {
        path: ':slug',
        component: PostComponent
      }
    ])
  ]
})
export class BlogModule { }
