import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core"
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { HomeModule } from "./home/home.module";
import { ProductModule } from "./product/product.module";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        HomeModule,
        ProductModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AppModule {}

