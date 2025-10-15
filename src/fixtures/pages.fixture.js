import {test as base} from "@playwright/test";
import { Loginpage } from "../pages/loginPage";
import { Inventory } from "../pages/inventoryPage";
import { Cartpage } from "../pages/cartPage";


export const test = base.extend({
    loginpage: async({page},use) => {
        await use(new Loginpage(page))
    },
    inventorypage: async({page}, use) => {
        await use(new Inventory(page))
    },
    cart: async({page}, use) => {
        await use(new Cartpage(page))
    }
})

export { expect } from '@playwright/test';