import Bedding_set_step from "../../steps/bed_linen/Bedding_set_step";
import City_step from "../../steps/City_step";
import {data} from "../../data";
import {test} from "@playwright/test";
import Buy_one_click_step from "../../steps/Buy_one_click_step";

test("add product to cart", async ({page}) => {
    const beddingSetStep = new Bedding_set_step(page);
    const cityStep = new City_step(page);

    await page.goto(data.url);
    await cityStep.chooseCity();
    await beddingSetStep.addToCart();
});

test("add related product", async ({page}) => {
    const beddingSetStep = new Bedding_set_step(page);
    const cityStep = new City_step(page);

    await page.goto(data.url);
    await cityStep.chooseCity();
    await beddingSetStep.addRelatedProduct();
});
test("buy one click", async ({page}) => {
    const buyOneClickStep = new Buy_one_click_step(page);
    const cityStep = new City_step(page);

    await page.goto(data.url);
    await cityStep.chooseCity();
    await buyOneClickStep.buyOneClick('name', '111');
});

