export class NavigationPage{
  constructor(page){
    this.page=page;

    this.aboutLink=page.locator('a:has-text("About")');
    this.sweetsLink=page.locator('a:has-text("Sweets")');
    this.basketLink=page.locator('a:has-text("Basket")');
    this.loginLink=page.locator('a:has-text("Login")');
  }

  async goToAbout(){
    await this.aboutLink.click();
  }

  async goToSweets(){
    await this.sweetsLink.click();
  }

  async goToBasket(){
    await this.basketLink.click();
  }

  async goToLogin(){
    await this.loginLink.click();
  }
}
