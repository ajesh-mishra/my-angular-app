import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './my-material.module';
import { LayoutComponent } from './layout/layout.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports:  [ BrowserModule, 
              BrowserAnimationsModule,
              FormsModule,
              MyMaterialModule,
            ],
  declarations: [ AppComponent,
                  LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
