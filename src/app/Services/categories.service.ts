import { Injectable } from '@angular/core';
import { CategoriasItem } from '../Interfaces/categories.interface';
import Constants from '../../../Constants';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor() {}

  getRandomCategory(): CategoriasItem {
    const randomIndex = Math.floor(Math.random() * Constants.allCategories.length);
    return Constants.allCategories[randomIndex];
  }

   get6RandomCategory(): CategoriasItem[] {
    const allCategories = [...Constants.allCategories]; // está hecho así con los parentesis porque el allCategories al hacerle split al parecer tambien lo borra del Constants, no se por que
    const selectedCategories: CategoriasItem[] = [];
    let randomNumber: number;
    let categoryAux: CategoriasItem;


    for (let i = 0; i < 6; i++) {

        randomNumber = Math.floor(Math.random() * allCategories.length);
        categoryAux = allCategories[randomNumber];

        if (categoryAux) {
            selectedCategories.push(categoryAux);
            allCategories.splice(randomNumber, 1);
        }
    }

    return selectedCategories;
  }
}
