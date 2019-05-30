import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { D3Service } from './d3/d3.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMgmtService } from './user-mgmt.service';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { VisualizeComponent } from './visualize/visualize.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserSettingsComponent,
    DataEntryComponent,
    VisualizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [HttpService, D3Service, UserMgmtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
