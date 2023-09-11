//const expect = require('chai').expect;
describe('changing password',()=>
{
    it('should not to login   ', async()=>{
        await browser.url('/');
        await $("#username").setValue("dhoni");
        await $("#password").setValue("Msdhoni19");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        await browser.pause(3000)
    })

    it('should to login   ', async()=>{
        await browser.url('/');
        await $("#username").setValue("dhoni");
        await $("#password").setValue("Msdhoni11");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        await browser.pause(3000)
        const titleOfHomePage=await browser.getTitle();
        expect (titleOfHomePage).toHaveText('Home');
    })

    it("selecting my account",async()=>
    {
             await $('//*[@id="navbarSupportedContent"]/ul/li[1]').click();
            let myaccountButton = await $('//*[@id="user-account-menu"]/li/a');
            await expect(myaccountButton).toBeDisplayed();
            await browser.pause(3000);
            await myaccountButton.click()
        
    })

    it("chnaging password",async()=>
    {
        const accountPgaeTitle=await browser.getTitle();
        expect (accountPgaeTitle).toHaveText('My Account');
        await $('//*[@id="tasks"]/a[1]').click();
        await $('#oldPassword-field').setValue('Msdhoni11');
        await $('#newPassword-field').setValue('Msdhoni12')
        await $('#confirmPassword-field').setValue('Msdhoni12');
        await $('#save-button').click();
        expect (accountPgaeTitle).toHaveText('My Account');

    })
   it ("log out and login again to check new password",async()=>
   {
        await $('//*[@id="navbarSupportedContent"]/ul/li[3]/a').click();
        const pageTitle=await browser.getTitle();
        expect(pageTitle).toHaveText('Login');
        await $("#username").setValue("dhoni");
        await $("#password").setValue("Msdhoni12");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        let HomePageTitle=await browser.getTitle();
        expect(HomePageTitle).toHaveText('Home');
   })
})