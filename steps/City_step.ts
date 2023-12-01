import {Page} from "@playwright/test";
import City_page from "../pages/City_page";

export default class City_step {
    readonly page: Page;
    cityPage: City_page;

    public async chooseCity() {
        await this.cityPage.chooseCity().click()
        await this.cityPage.moscowCity().click()
    }

    constructor(page: Page) {
        this.page = page;
        this.cityPage = new City_page(this.page);

    }
}