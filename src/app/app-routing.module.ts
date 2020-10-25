import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./lazy-components/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./lazy-components/form-modal/form-modal.module').then(m => m.FormModalModule),
    outlet: 'modal'
  },
  {
    path: 'blog',
    loadChildren: () => import('./lazy-components/blog/blog.module').then(m => m.BlogModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
