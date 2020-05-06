import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonDirective} from './angular-ui-tree/button';
import {HttpClientModule} from '@angular/common/http';
import {TreeModule} from './angular-ui-tree/tree.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
