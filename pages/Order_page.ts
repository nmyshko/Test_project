import {Page} from "@playwright/test";

export default class Order_page {

    page: Page;
    private _logo = () => this.page.getByRole('heading', { name: 'Оформление заказа' });

    constructor(page: Page) {
        this.page = page;
    }

    get logo(): () => any {
        return this._logo;
    }
}