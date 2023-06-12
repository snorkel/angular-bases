import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    DbzMainComponent,
    ListadoComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainComponent
  ]
})
export class DbzModule { }
