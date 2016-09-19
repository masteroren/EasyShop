import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";

export const appRoutes = [
    { path: "", redirectTo: "/product", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "product", component: ProductComponent }
];