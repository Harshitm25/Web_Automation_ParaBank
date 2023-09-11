const expect = require('chai').expect;
describe('Manage accounts in System administration',()=>
{
    let familyName;
    let givenName;
    it('should able to login page  ', async()=>{
        await browser.url('/');
        const title = await browser.getTitle();
        expect(title).to.equal('Login');
        //await expect(browser).toHaveTitle('Login');
       
    })
    it("should visit after login",async()=>
    {
        await browser.url('/');
        await $("#username").setValue("admin");
        await $("#password").setValue("Admin123");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        // await browser.pause(3000);
        const titleOfHome=await browser.getTitle();
        expect (titleOfHome).to.equal('Home');
    })
    it("able to click on system adminsitration",async()=>
    {
      
       const BtnSystemAdmin= await $('#coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension')
       expect (await BtnSystemAdmin.isClickable()).to.be.true;
       await BtnSystemAdmin.click();
       await $('#org-openmrs-module-adminui-accounts-app').click();
    })
    it("should visit to the manage account page and click button",async()=>
    {
        const addAccountBtn=await $('#content > a');
         expect(await addAccountBtn.isExisting()).to.be.true;
        await addAccountBtn.click();
    })

    it("filling personal details ",async()=>
    {
        familyName='Don21';
        givenName='chandu31';
        await $('#adminui-familyName-field').setValue(familyName);
        await $('#adminui-givenName-field').setValue(givenName);
        await $('#adminui-gender-0-field').click();

    });

    it("filling account details",async()=>
    {
        
        let addUserAcntBtn=await $('#adminui-addUserAccount');
        expect (await addUserAcntBtn.isClickable()).to.be.true;
        await addUserAcntBtn.click();
        let username=await $('#adminui-username-field');
        await username.setValue('don12345');
        let selectElement = await $('#adminui-privilegeLevel-field');
        await selectElement.selectByVisibleText('Full');
        await $('#adminui-password-field').setValue('Donchandu123456');
        await $('#adminui-confirmPassword-field').setValue('Donchandu123456');
        // await $('#adminui-confirmPassword-field').setValue('Msdhoni7');
        await $('#adminui-forceChangePassword').click();
    })
           
    it("checking all capabilities",async()=>
    {
        let administrativeCapabilitescheck = await $('//*[@id="adminui-capabilities-Application: Administers System"]');
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
            await $('#adminui-addProviderAccount').click();
            await $('#adminui-identifier-field').setValue('abcdef1234');
             let selectproviderRole=await $('#adminui-providerRole-field');
             await selectproviderRole.selectByVisibleText('Clerk')
             await $('#save-button').click();
             await browser.pause(5000)

           })

           it("searching the result",async()=>
           {
            let searchGivenFamilyname=givenName+" "+familyName;
            await $('//*[@id="list-accounts_filter"]/label/input').setValue(searchGivenFamilyname);
             let serachBarResult= await $('//*[@id="list-accounts"]/tbody/tr/td[1]').getText();
             expect (serachBarResult).to.equal(searchGivenFamilyname)
           })
          

    

})