const helpers = require("../helpers/helpers");
const { cartPageLocators } = require("./locators/cartPageLocators");
async function addToCartAndVerifyTotal(page, total) {
    //-----------add to cart------------
    await helpers.waitAndClick(page, cartPageLocators.addToCartBtn);
    //--------total amount verify-------
    const totalAmt = await helpers.getValue(page, cartPageLocators.totalAmount);
    expect(totalAmt).to.equal(total);
}

module.exports = { addToCartAndVerifyTotal };