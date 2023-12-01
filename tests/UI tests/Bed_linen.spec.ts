import {Page, test} from '@playwright/test';
import Bedding_set_step from "../../steps/bed_linen/Bedding_set_step";
import City_step from "../../steps/City_step";
import {data} from "../../data";

let page: Page;
let beddingSetStep: Bedding_set_step;
let cityStep: City_step;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto(data.url);
    beddingSetStep = new Bedding_set_step(page);
    cityStep = new City_step(page);
});

test.describe('bedding set tests', () => {

    test("add product to cart", async () => {
        await cityStep.chooseCity();
        await beddingSetStep.addToCart();
    });

    test("add related product", async () => {
        await cityStep.chooseCity();
        await beddingSetStep.addRelatedProduct();
    });
});

test.afterAll(async () => {
    if (page) {
        await page.close();
    }
});