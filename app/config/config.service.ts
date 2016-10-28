import { Injectable } from "@angular/core";
import { ConfigModel } from "./config.model";

@Injectable()
export class ConfigService {
    model:ConfigModel;

    constructor() {
        console.log("Config service constructor");
        this.model = new ConfigModel(true, false);
    }

    get Config(){
        return this.model;
    }


}