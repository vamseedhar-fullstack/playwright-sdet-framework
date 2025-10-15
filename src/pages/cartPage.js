/**
 * @typedef {import('@playwright/test').Page} Page
 */

export class Cartpage {
    
    /**
   * @param {Page} page
   */

    constructor(page){
        this.page = page;
        this.cartbtn = page.locator(".shopping_cart_link");
        this.product = page.locator(".inventory_item_name");
        this.continueshoppingbtn = this.page.locator("#checkout");
        this.formname = page.locator("#first-name");
        this.formlastname = page.locator("#last-name");
        this.pincode = page.locator("#postal-code");
        this.checkoutcontinuebtn = page.locator("#continue");
        this.finishbtn = page.locator("#finish");
        this.thankyoutext = page.locator(".complete-header");
    }

     async cart() {
        await this.cartbtn.click();
    }

    async checkproductnames(){
       return  await this.product.allTextContents();
    }

    async clickcontinue(){
        await this.continueshoppingbtn.click();
    }

    async submitcheckoutdetails(name,lastname, pincode) {
        await this.formname.fill(name);
        await this.formlastname.fill(lastname);
        await this.pincode.fill(pincode);
        await this.checkoutcontinuebtn.click();
        await this.finishbtn.click();
    }

    async finalsteptocheck(){
       return await this.thankyoutext.textContent();
    }
}