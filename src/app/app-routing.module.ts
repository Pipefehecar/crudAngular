import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './person/index/index.component';
import { CreateComponent } from './person/create/create.component';
import { EditComponent } from './person/edit/edit.component';
const routes: Routes = [
  { path: 'registroBiologico', redirectTo: 'registroBiologico/index', pathMatch: 'full'},
  { path: 'registroBiologico/index', component: IndexComponent },
  { path: 'registroBiologico/create', component: CreateComponent },
  { path: 'registroBiologico/edit/:idPerson', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
