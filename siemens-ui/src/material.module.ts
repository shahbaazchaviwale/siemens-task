
import { NgModule } from '@angular/core';

import {
  MatSidenavModule, MatSnackBarModule,
  MatIconModule, MatToolbarModule, MatProgressBarModule,
  MatCardModule, MatCheckboxModule, MatGridListModule, MatRadioModule,
  MatButtonModule, MatListModule, MatTooltipModule, MatTableModule,
  MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, 
  MatExpansionModule, MatButtonToggleModule,
  MatDatepickerModule
} from '@angular/material';



@NgModule({
  exports: [
    MatSidenavModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDatepickerModule
  ],
})
export class MaterialModule{}