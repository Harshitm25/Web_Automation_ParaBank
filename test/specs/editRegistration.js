const loginPage=require( "../pageobjects/login.page");
const EditRegister=require('../pageobjects/editRegistration.page')
const VisitWorkflow=require('../pageobjects/visitworkflow.page')

describe('edit registration',()=>
{
    it('should login', async()=>{
        await browser.url('/');
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni14");   //change
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        await browser.pause(3000)
    })

    it("click on register a patient",async()=>
    {
        await VisitWorkflow.registerPatientBtn.click();
        await browser.keys(['T', 'e', 's', 't']);
        await browser.keys(['\uE007']);
        await browser.keys(['\uE007']);

        await browser.keys(['h', 'a', 'r', 's']);
        await browser.pause(4000)
        await VisitWorkflow.nextBtn.click();
        await VisitWorkflow.genderBtn.click();
        await VisitWorkflow.nextBtn.click();
        await VisitWorkflow.birthYears.setValue('12');
        await VisitWorkflow.birthMonth.setValue('10');
        await VisitWorkflow.nextBtn.click();
        await VisitWorkflow.addressBtn.setValue('abc');
        await VisitWorkflow.nextBtn.click();
         await VisitWorkflow.nextBtn.click();
        await VisitWorkflow.nextBtn.click();
       

       

        await VisitWorkflow.submitBtn.click();

        await browser.pause(5000)
       
    })

    it("editing info",async()=>
    {
        await EditRegister.editInfo.click();
        await EditRegister.editName.click();
        await browser.keys(['N']);
        await EditRegister.saveBtn.click();
        await EditRegister.submitBtn.click();
    })

    it("checking the text updated or not",async()=>
    {
        let updatedInfotext=await EditRegister.updatedInfotext;
       await expect(updatedInfotext).toHaveText('NTest');
        console.log("this am getting",updatedInfotext);
        await browser.pause(5000)
    })
})

