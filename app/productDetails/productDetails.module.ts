import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./productDetails.component";

@NgModule({
  exports: [ProductDetailsComponent],
  declarations: [
    ProductDetailsComponent,
  ]
})
export class ProductDetailsModule {}