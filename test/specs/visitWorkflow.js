//const { expect } = require("chai");

describe('changing password',()=>
{
    it('should login', async()=>{
        await browser.url('/');
        await $("#username").setValue("dhoni");
        await $("#password").setValue("Msdhoni12");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        await browser.pause(3000)
    })

    it("click on register a patient",async()=>
    {
        let selector=await $('//*[@id="referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension"]').click();
        await browser.keys(['T', 'e', 's', 't']);
        await browser.keys(['\uE007']);
        await browser.keys(['\uE007']);

        await browser.keys(['h', 'a', 'r', 's']);
        await browser.pause(4000)
        //await $('.required focused ui-autocomplete-input error').setValue('harshit');
        await $('#next-button').click();
        await $('//*[@id="gender-field"]/option[1]').click();
        await $('#next-button').click();
        await $('#birthdateYears-field').setValue('12');
        await $('#birthdateMonths-field').setValue('10');
        await $('#next-button').click();
        await $('#address1').setValue('abc');
        await $('#next-button').click();
        //await $('//*[@id="fr1132-field"]').setValue('012');
         await $('#next-button').click();
        await $('#next-button').click();
       

        // await browser.keys(['']);
        // await browser.keys(['Enter']);

        await $('#submit').click();

        await browser.pause(5000)
       
    })

    it("start visiting workflow and test start visit button ",async()=>
    {
        let startvisitBtn=await $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]');
        await expect(startvisitBtn).toBeExisting();

        await $(startvisitBtn).click();
        await $('#start-visit-with-visittype-confirm').click();
        await browser.pause(3000)
    })

    it("end visit workflow and test end visit button",async()=>
    {

        let endVisitBtn= await $('//*[@id="visit-details"]/div[2]/a[1]');
        await expect(endVisitBtn).toBeExisting();
        await browser.pause(3000)
        await endVisitBtn.click();
        await browser.pause(3000)

         await $('//*[@id="end-visit-dialog"]/div[2]/button[1]').click();
        await browser.pause(3000)
    })
})

