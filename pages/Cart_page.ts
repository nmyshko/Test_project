import {Page} from "@playwright/test";

export default class Cart_page {

    page: Page;
    private _logo = () => this.page.getByTestId('cart-modal').getByText('Товар в корзине');

    constructor(page: Page) {
        this.page = page;
    }

    get logo(): () => any {
        return this._logo;
    }
}