export class LoginPage{
  constructor(page){
    this.page=page;

    this.emailInput=page.locator('input[type="email"]');
    this.passwordInput=page.locator('input[type="password"]');
    this.loginButton=page.locator('button:has-text("Login")');
    this.errorMsg=page.locator('text=valid email');
  }

  async goTo(){
    await this.page.goto('/login');
  }

  async login(email, password){
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
