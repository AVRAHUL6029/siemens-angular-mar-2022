import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from '../accounts/accounts.module';
import { ContainerComponent } from './container/container.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LabelComponent } from './label/label.component';


@NgModule({
  declarations: [ContainerComponent,  HeaderComponent, FooterComponent, LabelComponent, MainContentComponent],
  imports: [BrowserModule, AccountsModule],
  exports: [ContainerComponent, HeaderComponent, FooterComponent, LabelComponent, MainContentComponent],
  bootstrap: []
})
export class UtilityModule { }
