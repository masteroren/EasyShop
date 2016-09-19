import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
  ],
  exports: [HomeComponent],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
