import {expect} from '@playwright/test';

export class SweetsPage{
  constructor(page){
    this.page=page;

    this.addToBasketButton=page.locator('text=Add to basket');
  }

  async goTo(){
    await this.page.goto('/sweets');
    await expect(this.addToBasketButton.first()).toBeVisible();
  }

  async addItemToBasket(){
    await this.addToBasketButton.first().click();
  }
}
