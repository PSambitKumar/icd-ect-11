import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ECTAngularComponent } from "./ect-angular/ect-angular.component";

@NgModule({
  declarations: [AppComponent, ECTAngularComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
