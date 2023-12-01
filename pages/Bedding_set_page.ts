import {Page} from "@playwright/test";

export default class Bedding_set_page {

    page: Page;

    private _shoppingCartButton = () => this.page.getByLabel('Корзина');
    private _addRelatedProduct = () => this.page.getByText('Добавить:');
    private _additionalProduct = () => this.page.locator('.vqM8d > .PKaz8 > .ui-oyu-F').first();
    private _applyButton = () => this.page.getByRole('button', {name: 'Применить'});
    private _plus = () => this.page.getByTestId('plus').nth(1);
    private _minus = () => this.page.getByTestId('minus').nth(1);
    private _addToCart = () => this.page.getByTestId('sidebar-buy-button');
    private _notifyOfAvailability = () => this.page.getByRole('button', {name: 'Уведомить о наличии'});


    constructor(page: Page) {
        this.page = page;
    }

    get shoppingCartButton(): () => any {
        return this._shoppingCartButton;
    }


    get addRelatedProduct(): () => any {
        return this._addRelatedProduct;
    }

    get additionalProduct(): () => any {
        return this._additionalProduct;
    }

    get applyButton(): () => any {
        return this._applyButton;
    }

    get plus(): () => any {
        return this._plus;
    }

    get minus(): () => any {
        return this._minus;
    }

    get addToCart(): () => any {
        return this._addToCart;
    }

    get notifyOfAvailability(): () => any {
        return this._notifyOfAvailability;
    }
}