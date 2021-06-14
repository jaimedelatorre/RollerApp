import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./modules/routes/routes-routing.module').then(m => m.RoutesRoutingModule)
  },
  {
    path: 'tricks', loadChildren: () =>
      import('./modules/tricks/tricks-routing.module').then(m => m.TricksRoutingModule)
  },
  {
    path: 'social', loadChildren: () =>
      import('./modules/social/social-routing.module').then(m => m.SocialRoutingModule)
  },
  {
    path: 'profile', loadChildren: () =>
      import('./modules/profile/profile-routing.module').then(m => m.ProfileRoutingModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
