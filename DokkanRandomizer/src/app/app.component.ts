import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './Services/character.service';
import { CategoriesService } from './Services/categories.service';
import { CharacterItem } from './interfaces/character.interface';
import { CategoriasItem } from './interfaces/categories.interface';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import Constants from '../Constants';
import { IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,
    HttpClientModule,
    NgIf,
    IonIcon,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent {
  character: CharacterItem | undefined ;
  category: CategoriasItem | undefined ;
  baseURL : string = Constants.urlImagenes
  title = 'DokkanRandomizer';

  constructor(
    private characterService: CharacterService,
    private categoriesService: CategoriesService,

  ) {
  }



  getRandomCategory() {
    this.category = this.categoriesService.getRandomCategory()
    this.characterService.getCharacterInCategory
  }

  getRandomCharacter() {

    let cat = this.category
    if(cat == null){
      this.category = this.categoriesService.getRandomCategory()
    }


    if (this.category) {
      this.characterService.getCharacterInCategory(this.category.id).subscribe((res: CharacterItem) => {
        this.character = res;
      });
    }

   // this.character = this.characterService.getCharacterInCategory(this.category?.id).subscribe((res: any)=>{

}


}
