/**
 * @typedef {import('@playwright/test').Page} Page
 */


export class Inventory{

   /**
   * @param {Page} page
   */

    constructor (page) {
        this.page = page;
        this.productname = page.locator(".inventory_item_name"); 
        this.addtocatrbtn = page.locator("//button[@id='add-to-cart']");
    }


    async selectproduct(product) {

        await this.page.goto("/inventory.html");

        const allproducts = await this.page.$$(".inventory_item_name");

        for(let item of allproducts){
            const seletedproduct = await item.textContent();

            if (product == seletedproduct){
                    await item.click();
                    break;
            }
        }
       await this.addtocatrbtn.click();
    }

}