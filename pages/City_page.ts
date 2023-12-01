import {Page} from "@playwright/test";

export default class City_page {

    page: Page;
    private _chooseCity = () => this.page.getByTestId('region-question-button-no');
    private _moscowCity = () => this.page.getByRole('link', { name: 'Москва' }).nth(1);

    constructor(page: Page) {
        this.page = page;
    }

    get chooseCity(): () => any {
        return this._chooseCity;
    }

    get moscowCity(): () => any {
        return this._moscowCity;
    }
}