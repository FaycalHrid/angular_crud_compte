import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CompteListComponent } from "./component/compte-list/compte-list.component";
import { HeaderComponent } from "./component/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { CompteFormComponent } from "./component/compte-form/compte-form.component";
import { FormsModule } from "@angular/forms";
import { CompteDetailComponent } from './component/compte-detail/compte-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteListComponent,
    HeaderComponent,
    CompteFormComponent,
    CompteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
