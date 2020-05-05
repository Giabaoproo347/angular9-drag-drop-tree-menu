import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonDirective} from './angular-ui-tree/button';
import {TreeModule} from 'ng2-tree';
import {HttpClientModule} from '@angular/common/http';
import {SafeHtmlPipe} from './angular-ui-tree/utils/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
