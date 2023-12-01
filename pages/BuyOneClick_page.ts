import {Page} from "@playwright/test";

export default class BuyOneClick_page {

    page: Page;
    private _buyOneClickButton = () => this.page.getByText('Купить в 1 клик');
    private _name = () => this.page.getByPlaceholder('Имя');
    private _phone = () => this.page.getByPlaceholder('Телефон*');
    private _buyButton = () => this.page.getByRole('button', { name: 'Купить' });
    private _successWindow = () => this.page.getByText('Спасибо!');


    constructor(page: Page) {
        this.page = page;
    }


    get buyOneClickButton(): () => any {
        return this._buyOneClickButton;
    }

    get name(): () => any {
        return this._name;
    }

    get phone(): () => any {
        return this._phone;
    }

    get buyButton(): () => any {
        return this._buyButton;
    }

    get successWindow(): () => any {
        return this._successWindow;
    }
}