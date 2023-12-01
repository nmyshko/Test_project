import {Page} from "@playwright/test";

export default class Bedding_set_page {

    page: Page;

    private _favoritesButton = () => this.page.getByLabel('Избранное');
    private _sizing = () => this.page.locator('.UCL74 > .ui-MYNhR > div > .ui-K6eTE > .ui-ZttOm');
    private _euroSet = () => this.page.getByRole('link', {name: 'евро', exact: true}).nth(1);
    private _shoppingCartButton = () => this.page.getByLabel('Корзина');
    private _addRelatedProduct = () => this.page.getByText('Добавить:');
    private _additionalProduct = () => this.page.locator('.vqM8d > .PKaz8 > .ui-oyu-F').first();
    private _applyButton = () => this.page.getByRole('button', {name: 'Применить'});
    private _plus = () => this.page.getByTestId('plus').nth(1);
    private _minus = () => this.page.getByTestId('minus').nth(1);
    private _addToCart = () => this.page.getByTestId('sidebar-buy-button');


    constructor(page: Page) {
        this.page = page;
    }

    get favoritesButton(): () => any {
        return this._favoritesButton;
    }

    get sizing(): () => any {
        return this._sizing;
    }

    get euroSet(): () => any {
        return this._euroSet;
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
}