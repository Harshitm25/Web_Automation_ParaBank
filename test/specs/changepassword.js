//const expect = require('chai').expect;
const loginPage=require( "../pageobjects/login.page");
const ChangePassword=require('../pageobjects/changePassword.page')
describe('changing password',()=>
{
    it('it should not login   ', async()=>{
        await browser.url('/');
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni19");
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        await browser.pause(3000)
    })

    it('it should login ', async()=>{
        await browser.url('/');
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni13");     //change
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        await browser.pause(3000)
        const titleOfHomePage=await browser.getTitle();
        expect (titleOfHomePage).toHaveText('Home');
    })

    it("selecting my account",async()=>
    {
             await ChangePassword.selectAccount.click();
            let myaccountButton = await ChangePassword.myAccntBtn;
            await expect(myaccountButton).toBeDisplayed();
            await browser.pause(3000);
            await myaccountButton.click()
        
    })

    it("changing password",async()=>
    {
        const accountPgaeTitle=await browser.getTitle();
        expect (accountPgaeTitle).toHaveText('My Account');
        await ChangePassword.changePasswdBtn.click();
        await ChangePassword.oldPasswordBtn.setValue('Msdhoni13');       //change
        await ChangePassword.newPasswdField.setValue('Msdhoni14');        //change
        await ChangePassword.confmPasswordField.setValue('Msdhoni14');   //change
        await ChangePassword.saveBtn.click();
        expect (accountPgaeTitle).toHaveText('My Account');

    })
   it ("log out and login again to check new password",async()=>
   {
        await ChangePassword.logoutBtn.click();
        const pageTitle=await browser.getTitle();
        expect(pageTitle).toHaveText('Login');
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni14");              //change
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        let HomePageTitle=await browser.getTitle();
        expect(HomePageTitle).toHaveText('Home');
   })
})