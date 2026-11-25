
export class KP_login_page 
{
/**
 * 
 * @param {import ('@playwright/test').page} page 
 */

    constructor(page)
    {
        this.page = page;
        this.username_field = page.locator("#ulogin");
        this.password_field = page.locator("#upass");
        this.login_btn = page.locator("#sub_logbtn");
        this.logo = page.getByAltText("Kerala Property");
    }

    async setValues(username, password)
    {
        
        await this.username_field.fill(username);
        await this.password_field.fill(password);
    }

    async loginClick()
    {
        await this.login_btn.click();
    }

    async logoClick()
    {
        await this.logo.click();
    }

}