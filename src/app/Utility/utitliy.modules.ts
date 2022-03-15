import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './container/footer/footer.component';
import { HeaderComponent } from './container/header/header.component';
import { MainContentComponent } from './container/main-content/main-content.component';

@NgModule({
  declarations: [ContainerComponent,  HeaderComponent, FooterComponent, MainContentComponent],
  imports: [BrowserModule],
  exports: [ContainerComponent, HeaderComponent, FooterComponent, MainContentComponent],
  bootstrap: []
})
export class UtilityModule { }
