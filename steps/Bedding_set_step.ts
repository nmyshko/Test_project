import {expect, Page} from "@playwright/test";
import Bedding_set_page from "../pages/Bedding_set_page";
import Cart_page from "../pages/Cart_page";
import City_page from "../pages/City_page";
import Order_page from "../pages/Order_page";
import {data} from "../data";

export default class Bedding_set_step {
    readonly page: Page;
    beddingSetPage: Bedding_set_page;
    cartPage: Cart_page;
    cityPage: City_page;
    orderPage: Order_page;

    public async addToCart() {
        try {
            await this.page.goto(data.url);
            await this.cityPage.chooseCity().click();
            await this.cityPage.moscowCity().click() // можно вынести отдельно, что бы не повторяться в каждом методе
            await this.beddingSetPage.addToCart().click();
            await expect(this.cartPage.logo()).toBeVisible();
        } catch {
            await this.beddingSetPage.notifyOfAvailability().click();
        }
    }

    public async addRelatedProduct() {
        await this.page.goto(data.url);
        await this.cityPage.chooseCity().click();
        await this.cityPage.moscowCity().click()
        await this.beddingSetPage.addRelatedProduct().click();
        await this.beddingSetPage.additionalProduct().click();
        await this.beddingSetPage.applyButton().click();
        await expect(this.beddingSetPage.plus()).toBeVisible();
    }
    public async moveToCart() {
        await this.page.goto(data.url);
        await this.cityPage.chooseCity().click();
        await this.cityPage.moscowCity().click()
        await this.beddingSetPage.shoppingCartButton().click();
        await expect(this.orderPage.logo()).toBeVisible();
    }

    constructor(page: Page) {
        this.page = page;
        this.beddingSetPage = new Bedding_set_page(this.page);
        this.cartPage = new Cart_page(this.page);
        this.cityPage = new City_page(this.page);
        this.orderPage = new Order_page(this.page);
    }
}