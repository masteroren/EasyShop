import { NgModule } from "@angular/core";
import { ConfigService } from "./config.service";
import { ConfigComponent } from "./config.component";

@NgModule({
  exports: [ConfigComponent],
  declarations: [
    ConfigComponent,
  ],
  providers:[ConfigService]
})
export class ConfigModule { }