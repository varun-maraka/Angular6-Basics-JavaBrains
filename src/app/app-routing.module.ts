import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { SettingsCompComponent } from './settings-comp/settings-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingChile1ProfileComponent } from './setting-chile1-profile/setting-chile1-profile.component';
import { SettingChild2ContactComponent } from './setting-child2-contact/setting-child2-contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeCompComponent,
    children: [
      {path: '', redirectTo: '/profile', pathMatch: 'full'},
      {path: 'profile', component: SettingChile1ProfileComponent},
      {path: 'contact', component: SettingChild2ContactComponent},
      { path: '**', component: PageNotFoundComponent}
    ]
  },
  { path: 'settings', component: SettingsCompComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
