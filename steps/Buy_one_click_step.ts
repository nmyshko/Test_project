import {expect, Page} from "@playwright/test";
import BuyOneClick_page from "../pages/BuyOneClick_page";
import {data} from "../data";
import City_page from "../pages/City_page";

export default class Buy_one_click_step {
    readonly page: Page;
    buyOneClickPage: BuyOneClick_page;
    cityPage: City_page;

    public async buyOneClick(name: string, phone: string) {
        await this.page.goto(data.url);
        await this.cityPage.chooseCity().click();
        await this.cityPage.moscowCity().click()
        await this.buyOneClickPage.buyOneClickButton().click();
        await this.buyOneClickPage.name().fill(name);
        await this.buyOneClickPage.phone().fill(phone);
        await this.buyOneClickPage.buyButton().click();
        // await expect(this.buyOneClickPage.successWindow()).toBeVisible(); //нужны корректные данные для успешного оформления заявки
    }
    constructor(page: Page) {
        this.page = page;
        this.buyOneClickPage = new BuyOneClick_page(this.page);
        this.cityPage = new City_page(this.page);
    }
}