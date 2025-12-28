import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {BasketPage} from '../pages/BasketPage';
import {SweetsPage} from '../pages/SweetsPage';
import {NavigationPage} from '../pages/NavigationPage';

test.describe('Playwright Tests for the Sweets Shop Website', () => {

  test('Test Case 1: Verify User Login', async ({page}) => {
    const loginPage=new LoginPage(page);

    await loginPage.goTo();
    await loginPage.login('test@user.com', 'qwerty');

    await expect(page).not.toHaveURL(/login/);
  });

  test('Test Case 2: Required fields (Empty fields present)', async ({page}) => {
    const basketPage=new BasketPage(page);

    await basketPage.goTo();
    await basketPage.continueToCheckout();

    await expect(basketPage.firstNameError).toBeVisible();
    await expect(basketPage.lastNameError).toBeVisible();
    await expect(basketPage.emailError).toBeVisible();
    await expect(basketPage.addressError).toBeVisible();
    await expect(basketPage.countryError).toBeVisible();
    await expect(basketPage.stateError).toBeVisible();
    await expect(basketPage.zipError).toBeVisible();
    await expect(basketPage.cardNameError).toBeVisible();
    await expect(basketPage.cardNumberError).toBeVisible();
    await expect(basketPage.expirationError).toBeVisible();
    await expect(basketPage.cvvError).toBeVisible();
  });

  test('Test Case 3: Adding Items to Basket', async ({page}) => {
    const sweetsPage=new SweetsPage(page);
    const basketPage=new BasketPage(page);

    await sweetsPage.goTo();
    await sweetsPage.addItemToBasket();

    await page.goto('/basket');

    await expect(basketPage.basketItems.first()).toBeVisible();
  });

  test('Test Case 7: Proper form (Invalid email adress)', async ({page}) => {
    const loginPage=new LoginPage(page);

    await loginPage.goTo();
    await loginPage.login('email.gmail', 'password123');

    await expect(loginPage.errorMsg).toBeVisible();
  });

  test('Test Case 8: Web navigation', async ({page}) => {
    const nav=new NavigationPage(page);

    await page.goto('/');

    await nav.goToAbout();
    await expect(page).toHaveURL(/about/);

    await nav.goToBasket();
    await expect(page).toHaveURL(/basket/);

    await nav.goToSweets();
    await expect(page).toHaveURL(/sweets/);
  });
});
