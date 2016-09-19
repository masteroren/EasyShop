import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

@NgModule({
  exports: [HomeComponent],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
