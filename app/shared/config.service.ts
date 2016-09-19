import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService{
    config: {
        showBonus: boolean,
        showNutritions: boolean,
        showWarnings: boolean
    };

    constructor(){
        this.config.showBonus = false;
        this.config.showNutritions = false;
        this.config.showWarnings = false;
    }
}