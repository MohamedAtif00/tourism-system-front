import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { TouristPlaceCreationComponent } from './admin/tourist-place-creation/tourist-place-creation.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./main/main.module').then(x =>x.MainModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(x =>x.AdminModule)},
  {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(x =>x.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
