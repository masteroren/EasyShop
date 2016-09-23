import { Component } from "@angular/core";
import { ConfigService } from "./config.service";

@Component({
    selector: 'config',
    templateUrl: 'config/config.component.html',
    styleUrls: ['config/config.css']
})
export class ConfigComponent {

    constructor(public configService: ConfigService) {
        console.log('ConfigComponent constructor -> ' + this.configService.model.showBonuses);
    }

    bonusTap() {
        if (this.configService.model.showBonuses === false)
            this.configService.model.showBonuses = true;
        else
            this.configService.model.showBonuses = false;
        console.log('Bonuses tapped -> ' + this.configService.model.showBonuses);
    }
}

