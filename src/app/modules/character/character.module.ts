import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CharacterComponent,
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ]
})
export class CharacterModule { }
