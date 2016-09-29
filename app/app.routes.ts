import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ConfigComponent } from "./config/config.component";
import { ProductDetailsComponent } from "./productDetails/productDetails.component";

export const appRoutes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "config",
        component: ConfigComponent
    },
    {
        path: "productDetails",
        component: ProductDetailsComponent
    }
];