import { Component } from '@angular/core';
import { CharacterItem } from '../../../Interfaces/character.interface';
import { CharacterService } from '../../../Services/character.service';
import Constants from '../../../../../Constants';
import { CategoriasItem } from '../../../Interfaces/categories.interface';
import { CategoriesService } from '../../../Services/categories.service';

@Component({
  selector: 'app-sixcategories',
  templateUrl: './sixcategories.component.html',
  styleUrl: './sixcategories.component.css'
})
export class SixcategoriesComponent {

  categories:  CategoriasItem[] | undefined ;
  categoriesText:string = "";

  constructor(
    private categoriesService: CategoriesService,

  ) {
  }


  get6RandomCategories() {
    this.categories = this.categoriesService.get6RandomCategory()

    let allCategories = "";
    for (let i = 0; i < this.categories.length; i++) {
      allCategories += this.categories[i].name + "\n";
    }
    this.categoriesText = allCategories;
  }

}
