import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixcategoriesComponent } from './component/pages/sixcategories/sixcategories.component';
import { CharacterincategoryComponent } from './component/pages/characterincategory/characterincategory.component';

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
  // Puedes agregar otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
