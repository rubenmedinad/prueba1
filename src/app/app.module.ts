import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { QueenComponent } from './queen/queen.component';
import { FundamentosComponent } from './fundamentos/fundamentos.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    QueenComponent,
    FundamentosComponent,
    OneWayBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
