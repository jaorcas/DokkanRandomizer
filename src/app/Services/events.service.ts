import { Injectable } from '@angular/core';
import Constants from '../../../Constants';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {}

  getRandomEvent(): string {
    const randomIndex = Math.floor(Math.random() * Constants.allEvents.length);
    return Constants.allEvents[randomIndex];
  }


}
