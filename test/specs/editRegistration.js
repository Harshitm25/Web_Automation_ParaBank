describe('edit registration',()=>
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

    it("editing info",async()=>
    {
        await $('//*[@id="application.registrationapp.summary.editPatientLink"]/div/div[2]').click();
        await $('#demographics-edit-link').click();
        await browser.keys(['N']);
        await $('//*[@id="formBreadcrumb"]/li[2]/span').click();
        await $('#registration-submit').click();
    })

    it("checking the text updated or not",async()=>
    {
        let updatedInfotext=await $('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[2]/div[1]/p');
       await expect(updatedInfotext).toHaveText('NTest');
        console.log("this am getting",updatedInfotext);
        await browser.pause(5000)
    })
})

