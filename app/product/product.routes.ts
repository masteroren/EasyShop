import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from "./product.component";

const homeRoutes: Routes = [
    { path: "product", component: ProductComponent }
]
export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
