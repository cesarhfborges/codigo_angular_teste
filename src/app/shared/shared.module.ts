import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlockCharsDirective} from './directives/block-chars.directive';



@NgModule({
  declarations: [
    BlockCharsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockCharsDirective
  ]
})
export class SharedModule { }
