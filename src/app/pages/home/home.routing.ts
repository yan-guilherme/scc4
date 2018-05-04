import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

export const homeRoutes: Routes = [
  {
    path: 'apps/home',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeModule {}
