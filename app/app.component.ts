import { Component } from "@angular/core";
import application = require("application");
import { Page } from "ui/page";

@Component({
    selector: "easy-shope-main",
    template: "<page-router-outlet></page-router-outlet>",
    styleUrls: ["app.css"]
})
export class AppComponent {

    constructor(private page: Page){}

    ngOnInit(){
        if (application.android){

        }

        if (application.ios){
            
        }

    }
}
