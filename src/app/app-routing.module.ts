import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixcategoriesComponent } from './component/pages/sixcategories/sixcategories.component';
import { CharacterincategoryComponent } from './component/pages/characterincategory/characterincategory.component';
import { DefensecalculatorComponent } from './component/pages/defensecalculator/defensecalculator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characterincategory', // Ruta predeterminada
    pathMatch: 'full'
  },
  {
    path: 'sixcategories',
    component: SixcategoriesComponent
  },
  {
    path: 'characterincategory',
    component: CharacterincategoryComponent
  },
  {
    path: 'defensecalculator',
    component: DefensecalculatorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
