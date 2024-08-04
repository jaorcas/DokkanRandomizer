import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterItem } from '../../Interfaces/character.interface';
import Constants from '../../../../Constants';
import { CharacterService } from '../../Services/character.service';
import { Observable } from 'rxjs';
import { CharacterincategoryComponent } from '../pages/characterincategory/characterincategory.component';

@Component({
  selector: 'app-image-with-button',
  templateUrl: './image-with-button.component.html',
  styleUrl: './image-with-button.component.css'
})
export class ImageWithButtonComponent {

  @Input() category: number | undefined;

  character:  Observable<CharacterItem>| undefined;
  baseURL : string = Constants.urlImagenes;
  imageURL:string = "assets/images/characterPlaceHolder.png";
  defaultImage:string = "assets/images/characterPlaceHolder.png";


  constructor(
    private characterService: CharacterService,
  ) {}

  getRandomCharacter() {
    if(this.category){
      this.character = this.characterService.getCharacterInCategory(this.category);
      this.character.subscribe(character => {
        this.imageURL = this.baseURL + character.thumb;
      });
    }
  }

  resetImage() {
    this.imageURL = this.defaultImage;
  }

}
