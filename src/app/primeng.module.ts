import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FileUploadModule} from 'primeng/fileupload';

const primeNgModules = [
  CardModule,
  InputTextModule,
  ButtonModule,
  DynamicDialogModule,
  ProgressSpinnerModule,
  FileUploadModule
]


@NgModule({
  imports: [primeNgModules],
  exports: [primeNgModules],
})


export class PrimengModule { }
