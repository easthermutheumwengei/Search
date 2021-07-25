import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github/github.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
// import { GithubFormComponent } from './github-form/github-form/github-form.component';
import { GithubResultComponent } from './github-result/github-result/github-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    GithubResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
