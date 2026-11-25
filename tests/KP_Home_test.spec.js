import { KP_Home_page } from "../pages/KP_Home_page";
import {test,expect} from '@playwright/test'
import { KP_login_page } from "../pages/KP_login_page";

/**
     @type {KP_login_page}
     */
    let login;
    /**
     @type {KP_Home_page}
     */
    let home ;


test.describe("HOME_PAGE", async()=>
{
    test.beforeEach("URL Loading",async({page})=>
    {
        await page.goto(process.env.BASEURL);
        login = new KP_login_page(page);
        await login.setValues(process.env.KP_USERNAME, process.env.KP_PASSWORD);
        await login.loginClick();
        await expect(page).toHaveURL(/myhome/);
        home = new KP_Home_page(page);
    })

    test("Homepage Logo Visibility", async()=>
    {
        await expect(home.logo).toBeVisible();
    })

    test("verify properties text", async()=>
    {
        await expect(home.heading_text).toHaveText("My Properties");
        
    })

    test("verify name", async()=>
    {
        await expect(home.profile_name).toHaveText("Joel");
    })

    test("Click account", async({page})=>
    {
        await home.clickAccount();
    })
})