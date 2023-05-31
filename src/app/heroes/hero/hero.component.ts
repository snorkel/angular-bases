import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;
  public mostrarName: boolean = true;
  public mostrarAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.mostrarName = false;
    this.mostrarAge = false;
  }
  changeAge(): void {
    this.age = 25;
    this.mostrarName = false;
    this.mostrarAge = false;
  }

}
