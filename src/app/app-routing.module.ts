import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { SettingsCompComponent } from './settings-comp/settings-comp.component';

const routes: Routes = [
  { path: 'home', component: HomeCompComponent },
  { path: 'settings', component: SettingsCompComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
