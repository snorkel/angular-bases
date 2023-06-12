import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from './../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class DbzMainComponent {
  constructor(private dbzService: DBZService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }
}
