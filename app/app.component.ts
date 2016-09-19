import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import observable = require("data/observable");

@Component({
    selector: "easy-shope-main",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(private routerExtensions: RouterExtensions){}

    config(args: observable.EventData){
        console.log("config");
        this.routerExtensions.navigate(['/config']);
    }
}
