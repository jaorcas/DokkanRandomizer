import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CategoriasItem } from '../../../Interfaces/categories.interface';
import Constants from '../../../../../Constants';
import { CategoriesService } from '../../../Services/categories.service';
import { ImageWithButtonComponent } from '../../image-with-button/image-with-button.component';

@Component({
  selector: 'app-characterincategory',
  templateUrl: './characterincategory.component.html',
  styleUrl: './characterincategory.component.css'
})
export class CharacterincategoryComponent {

  category:  CategoriasItem  | undefined;
  baseURL : string = Constants.urlImagenes
  @ViewChildren(ImageWithButtonComponent) imageWithButtons!: QueryList<ImageWithButtonComponent>;

  constructor(
    private categoriesService: CategoriesService,

  ) {
  }

  getRandomCategory(){
    this.category = this.categoriesService.getRandomCategory()

    this.imageWithButtons.forEach(c => {
      c.category = this.category?.id
    })

    this.resetAllImages();
  }

  resetAllImages(){
    this.imageWithButtons.forEach(c => {
      c.resetImage();
    })
  }

}
