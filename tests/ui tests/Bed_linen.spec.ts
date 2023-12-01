import Bedding_set_step from "../../steps/Bedding_set_step";
import {test} from "@playwright/test";
import Buy_one_click_step from "../../steps/Buy_one_click_step";

test("add product to cart", async ({page}) => {
    const beddingSetStep = new Bedding_set_step(page);
    await beddingSetStep.addToCart();
});

test("add related product", async ({page}) => {
    const beddingSetStep = new Bedding_set_step(page);
    await beddingSetStep.addRelatedProduct();
});
test("buy one click", async ({page}) => {
    const buyOneClickStep = new Buy_one_click_step(page);
    await buyOneClickStep.buyOneClick('name', '111');
});
test("move to a cart", async ({page}) => {
    const beddingSetStep = new Bedding_set_step(page);
    await beddingSetStep.moveToCart();
});