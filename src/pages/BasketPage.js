export class BasketPage{
  constructor(page){
    this.page=page;

    this.checkoutButton=page.locator('button:has-text("Continue to checkout")');
    this.basketItems=page.locator('li.list-group-item');
    this.firstNameError=page.locator('text=Valid first name is required');
    this.lastNameError=page.locator('text=Valid last name is required');
    this.emailError=page.locator('text=Please enter a valid email address for shipping updates.');
    this.addressError=page.locator('text=Please enter your shipping address.');
    this.countryError=page.locator('text=Please select a valid country.');
    this.stateError=page.locator('text=Please provide a valid state.');
    this.zipError=page.locator('text=Zip code required.');
    this.cardNameError=page.locator('text=Name on card is required');
    this.cardNumberError=page.locator('text=Credit card number is required');
    this.expirationError=page.locator('text=Expiration date required');
    this.cvvError=page.locator('text=Security code required');
  }

  async goTo(){
    await this.page.goto('/basket');
  }

  async continueToCheckout(){
    await this.checkoutButton.click();
  }
}
