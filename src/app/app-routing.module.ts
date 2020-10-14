import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomspherePlayComponent } from './atomsphere-play/atomsphere-play.component';

const routes: Routes = [{path: '', component: AtomspherePlayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
