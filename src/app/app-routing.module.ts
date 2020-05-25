import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { InvocadorComponent } from './invocador/invocador.component'

const routes: Routes = [
  {
    path: 'invocador',
    component: InvocadorComponent,
    data: { title: 'Invocador' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
