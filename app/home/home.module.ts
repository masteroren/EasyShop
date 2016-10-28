import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [CommonModule],
    exports: [HomeComponent],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
