import { Component } from "@angular/core";
import application = require("application");

@Component({
    selector: "easy-shope-main",
    template: "<page-router-outlet></page-router-outlet>",
    styleUrls: ["app.css"]
})
export class AppComponent {

    constructor(){}

    ngOnInit(){
        if (application.android){

        }

        if (application.ios){
            
        }

    }
}
