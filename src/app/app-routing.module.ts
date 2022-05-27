import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonCardComponent} from './components/person-card/person-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: PersonCardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
