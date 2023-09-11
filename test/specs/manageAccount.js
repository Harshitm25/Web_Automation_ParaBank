const expect = require('chai').expect;
const ManageAccount=require('../pageobjects/manageAccounts.page')
const loginPage=require('../pageobjects/login.page');
//const manageAccountsPage = require('../pageobjects/manageAccounts.page');
describe('Manage accounts in System administration',()=>
{
    let familyName;
    let givenName;
    it('should visit to login page  ', async()=>{
        await browser.url('/');
        const title = await browser.getTitle();
        expect(title).to.equal('Login');
        //await expect(browser).toHaveTitle('Login');
       
    })
    it("should login and visit login page",async()=>
    {
        await browser.url('/');
        await loginPage.inputUsername.setValue("admin");
        await loginPage.inputPassword.setValue("Admin123");
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        // await browser.pause(3000);
        const titleOfHome=await browser.getTitle();
        expect (titleOfHome).to.equal('Home');
    })
    it("able to click on system adminsitration",async()=>
    {
      
       const BtnSystemAdmin= await ManageAccount.systemBtn;
       expect (await BtnSystemAdmin.isClickable()).to.be.true;
       await BtnSystemAdmin.click();
       await ManageAccount.manageBtn.click();
    })
    it("should visit to the manage account page and click button",async()=>
    {
        const addAccountBtn=await ManageAccount.accntBtnExist;
         expect(await addAccountBtn.isExisting()).to.be.true;
        await addAccountBtn.click();
    })

    it("filling personal details ",async()=>
    {
        familyName='Don21';
        givenName='chandu31';
        await ManageAccount.familyNameBtn.setValue(familyName);
        await ManageAccount.givenNameBtn.setValue(givenName);
        await ManageAccount.nextClick.click();

    });

    it("filling account details",async()=>
    {
        
        let addUserAcntBtn=await ManageAccount.addUserAcntBtn;
        expect (await addUserAcntBtn.isClickable()).to.be.true;
        await addUserAcntBtn.click();
        let username=await ManageAccount.userNameBtn;
        await username.setValue('don1234567');                                   //change
        let selectElement = await ManageAccount.selectBtn;
        await selectElement.selectByVisibleText('Full');
        await ManageAccount.newPassBtn.setValue('Donchandu12345678');          //change
        await ManageAccount.confmPassBtn.setValue('Donchandu12345678');         //change
        // await $('#adminui-confirmPassword-field').setValue('Msdhoni7');
        await $('#adminui-forceChangePassword').click();
    })
           
    it("checking all capabilities",async()=>
    {
        let administrativeCapabilitescheck = await ManageAccount.capabiltyCheck;
        expect(await administrativeCapabilitescheck.isClickable()).to.be.true;
        await administrativeCapabilitescheck.click();
        await $('//*[@id="adminui-capabilities-Application: Configures Forms"]').click();
        await $('//*[@id="adminui-capabilities-Application: Edits Existing Encounters"]').click();

        await $('//*[@id="adminui-capabilities-Application: Enters Vitals"]').click();

        await $('//*[@id="adminui-capabilities-Application: Manages Atlas"]').click();

        await $('//*[@id="adminui-capabilities-Application: Records Allergies"]').click();

        await $('//*[@id="adminui-capabilities-Application: Requests Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Schedules Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Uses Capture Vitals App"]').click();

        await $('//*[@id="adminui-capabilities-Application: Writes Clinical Notes"]').click();

        await $('//*[@id="adminui-capabilities-Application: Configures Appointment Scheduling"]').click();

        await $('//*[@id="adminui-capabilities-Application: Configures Metadata"]').click();

        await $('//*[@id="adminui-capabilities-Application: Enters ADT Events"]').click();

        await $('//*[@id="adminui-capabilities-Application: Has Super User Privileges"]').click();

        await $('//*[@id="adminui-capabilities-Application: Manages Provider Schedules"]').click();
        await $('//*[@id="adminui-capabilities-Application: Registers Patients"]').click();

        await $('//*[@id="adminui-capabilities-Application: Schedules And Overbooks Appointments"]').click();

        await $('//*[@id="adminui-capabilities-Application: Sees Appointment Schedule"]').click();

        await $('//*[@id="adminui-capabilities-Application: Uses Patient Summary"]').click();

        await browser.pause(4000);
    })
           it("filling provider details",async()=>
           {
            await ManageAccount.addProviderBtn.click();
            await ManageAccount.setValueForAddBtn.setValue('abcdef123456');   //change
             let selectproviderRole=await ManageAccount.providerRoleBtn;
             await selectproviderRole.selectByVisibleText('Clerk')
             await ManageAccount.saveBtn.click();
             await browser.pause(5000)

           })

           it("searching the result",async()=>
           {
            let searchGivenFamilyname=givenName+" "+familyName;
            await ManageAccount.searchName.setValue(searchGivenFamilyname);
             let serachBarResult= await ManageAccount.searchbarResult.getText();
             expect (serachBarResult).to.equal(searchGivenFamilyname)
             await browser.pause(5000);
           })
          

    

})