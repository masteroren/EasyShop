import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core"
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { HomeModule } from "./home/home.module";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        HomeModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

