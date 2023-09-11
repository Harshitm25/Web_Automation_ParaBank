//const { expect } = require("chai");
const loginPage=require( "../pageobjects/login.page");
const visitWorkFlow=require('../pageobjects/visitworkflow.page')
describe('changing password',()=>
{
    it('should login', async()=>{
        await browser.url('/');
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni14");    //change
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        await browser.pause(3000)
    })

    it("click on register a patient",async()=>
    {
        let selector=await visitWorkFlow.registerPatientBtn.click();
        await browser.keys(['T', 'e', 's', 't']);
        await browser.keys(['\uE007']);
        await browser.keys(['\uE007']);

        await browser.keys(['h', 'a', 'r', 's']);
        await browser.pause(4000)
        //await $('.required focused ui-autocomplete-input error').setValue('harshit');
        await visitWorkFlow.nextBtn.click();
        await visitWorkFlow.genderBtn.click();
        await visitWorkFlow.nextBtn.click();
        await visitWorkFlow.birthYears.setValue('12');
        await visitWorkFlow.birthMonth.setValue('10');
        await visitWorkFlow.nextBtn.click();
        await visitWorkFlow.addressBtn.setValue('abc');
        await visitWorkFlow.nextBtn.click();
        //await $('//*[@id="fr1132-field"]').setValue('012');
         await visitWorkFlow.nextBtn.click();
        await visitWorkFlow.nextBtn.click();
       

        // await browser.keys(['']);
        // await browser.keys(['Enter']);

        await visitWorkFlow.submitBtn.click();

        await browser.pause(5000)
       
    })

    it("start visiting workflow and test start visit button ",async()=>
    {
        let startvisitBtn=await visitWorkFlow.startVisitingBtn;
        await expect(startvisitBtn).toBeExisting();

        await $(startvisitBtn).click();
        await visitWorkFlow.confirmStartVisitingButton.click();
        await browser.pause(3000)
    })

    it("end visit workflow and test end visit button",async()=>
    {

        let endVisitBtn= await visitWorkFlow.endVisitBtn;
        await expect(endVisitBtn).toBeExisting();
        await browser.pause(3000)
        await endVisitBtn.click();
        await browser.pause(3000)

        await visitWorkFlow.confirmEndVisitBtn.click();
        await browser.pause(3000)
    })
})

