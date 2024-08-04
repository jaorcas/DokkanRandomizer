import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterItem } from '../interfaces/character.interface';
import Constants from '../../Constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Set<CharacterItem>> {
    return new Observable(observer => {
      this.getLRCharacters().subscribe(lrCharacters => {
        this.getURCharacters().subscribe(urCharacters => {
          const allCharacters = new Set<CharacterItem>([...lrCharacters, ...urCharacters]);
          observer.next(allCharacters);
          observer.complete();
        });
      });
    });
  }

  private getLRCharacters(): Observable<CharacterItem[]> {
    return this.getCharactersInJSON(Constants.LRJSONPath);
  }

  private getURCharacters(): Observable<CharacterItem[]> {
    return this.getCharactersInJSON(Constants.URJSONPath);
  }

sd  private getCharactersInJSON(jsonPath: string): Observable<CharacterItem[]> {
    return this.http.get<CharacterItem[]>(jsonPath)
  }

  getCharacterInCategory(id: number): Observable<CharacterItem> {
    return new Observable(observer => {
      this.getAllCharacters().subscribe(allCharacters => {
        const charactersInCategory = Array.from(allCharacters).filter(char => char.category_ids.includes(id));
        const randomCharacter = charactersInCategory[Math.floor(Math.random() * charactersInCategory.length)];
        observer.next(randomCharacter);
        observer.complete();
      });
    });
  }
}
