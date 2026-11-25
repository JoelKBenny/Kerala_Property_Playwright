
export class KP_Home_page 
{
/**
 * 
 * @param {import ('@playwright/test').page} page 
 */

    constructor(page)
    {
        this.page = page;
        this.logo = page.getByAltText("Kerala Property");
        this.heading_text = page.locator("/html/body/div[3]/div/div/div[2]/div/div[1]/h2");
        this.profile_name = page.locator("/html/body/div[3]/div/div/div[1]/div/div[1]/div[2]/h4");
        this.my_account_btn = page.locator("/html/body/div[3]/div/div/div[1]/div/ul/li[1]/a");
    }

    async clickAccount()
    {
        await this.my_account_btn.click();
    }

}