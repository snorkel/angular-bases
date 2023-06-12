import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DBZService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 950
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];

  addNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(indice: number): void {
  //   this.characters.splice(indice, 1);
  // }

  deleteCharacterById(id:string){
    console.log(id);

    this.characters = this.characters.filter(character=> character.id !== id);
  }

}
