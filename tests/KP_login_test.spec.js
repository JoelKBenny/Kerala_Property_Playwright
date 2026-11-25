
import { KP_login_page } from "../pages/KP_login_page";
import {expect, test} from '@playwright/test'

test.describe("LOGIN", async()=>
{
    /**
     @type {KP_login_page}
     */

    let login;

    test.beforeEach("URL Loading", async({page})=>
    {
        await page.goto(process.env.BASEURL);
        login = new KP_login_page(page);
    })

    test("valid login", async({page})=>
    {
        await login.setValues(process.env.KP_USERNAME, process.env.KP_PASSWORD);
        await login.loginClick();
        await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
    })

    test("invalid login", async({page})=>
    {
        await login.setValues("joel1234@gmail.com", "Joel23");
        await login.loginClick();
        await expect(page).toHaveURL("https://keralaproperty.in/member/login/");
    })

    test("Verify logo is visible", async()=>
    {
        await expect(login.logo).toBeVisible();
    })

    test("Verify logo is redirecting to homepage", async({page})=>
    {
        await login.logoClick();
        await expect(page).toHaveURL("https://keralaproperty.in/");
    })
})