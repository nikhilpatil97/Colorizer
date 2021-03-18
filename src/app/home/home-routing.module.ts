import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeResolverService } from './home-resolver.service';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { data: HomeResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
