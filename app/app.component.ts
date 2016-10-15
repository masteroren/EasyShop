import { Component } from "@angular/core";
import application = require("application");
import { Page } from "ui/page";


@Component({
    selector: "easy-shope-main",
    templateUrl: "app.component.html",
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
