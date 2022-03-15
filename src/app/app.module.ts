import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { UtilityModule } from './Utility/utitliy.modules';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, UtilityModule],
  bootstrap: [RootComponent]
})
export class AppModule { }
