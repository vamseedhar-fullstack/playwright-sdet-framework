import { test, expect } from "../../fixtures/pages.fixture";
import { testdata } from "../../fixtures/testData";
import config from "../../config/env.js";

test("Checkout flow from login to order confirmation", async ({ page, context, loginpage, inventorypage, cart }) => {

  // Start tracing so we can record the entire flow (useful for debugging or reviewing failed tests)
  await context.tracing.start({
    snapshots: true,
    screenshots: true
  });

  // Go to the login page
  await loginpage.goto(config.baseURL);

  // Log in with a valid user
  await loginpage.login(
    config.username,
    config.password
  );

  // Add a few products to the cart
  await inventorypage.selectproduct(testdata.product);
  await inventorypage.selectproduct(testdata.product1);
  await inventorypage.selectproduct(testdata.product2);

  // Open the cart to check if all selected items are there
  await cart.cart();

  // Grab all product names currently in the cart
  const cartItems = await cart.checkproductnames();

  // Make sure each product we added actually shows up in the cart
  await expect(cartItems).toContain(testdata.product);
  await expect(cartItems).toContain(testdata.product1);
  await expect(cartItems).toContain(testdata.product2);

  // Continue to the checkout process
  await cart.clickcontinue();

  // Fill in checkout details (using test data)
  await cart.submitcheckoutdetails(
    testdata.userinfo.firstname,
    testdata.userinfo.lastname,
    testdata.userinfo.pincode
  );

  // Final step: verify that the success message appears after placing the order
  const message = await cart.finalsteptocheck();
  await expect(message).toBe("Thank you for your order!");

  // Small wait just to keep the browser open a bit longer (handy during development)
  await page.waitForTimeout(3000);

  // Stop tracing and save the trace file (can be opened later to replay the session)
  await context.tracing.stop({ path: "src/reports/traces/checkout-trace.zip" });

  console.log("checking")
});
