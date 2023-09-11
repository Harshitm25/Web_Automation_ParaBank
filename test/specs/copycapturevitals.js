//const expect = require('chai').expect;
describe("My Login application", () => {
    let searchId;
    it("it shoudl login page",async()=>
    {
        await browser.url("https://demo.openmrs.org/openmrs/login.htm");
        await $("#username").setValue("dhoni");
        await $("#password").setValue("Msdhoni11");
        await $("#Pharmacy").click();
        await $("#loginButton").click();
        // const pageTitle=await browser.getTitle();
        await expect(browser).toHaveTitle('Home'); 
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

    it("record id and start visiting workflow",async()=>
    {
        searchId=await $('//*[@id="content"]/div[6]/div[2]/div/span').getText();
      //  console.log('my seraching text is : ',searchIdText);
        await $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]').click();
        await $('#start-visit-with-visittype-confirm').click();
        await browser.pause(3000)
        let endVisitBtn= await $('//*[@id="visit-details"]/div[2]/a[1]');
        await expect(endVisitBtn).toBeExisting();
        await browser.pause(3000)
        //visiting back to home page
        

        // await endVisitBtn.click();
        // await browser.pause(3000)

        // await $('//*[@id="end-visit-dialog"]/div[2]/button[1]').click();
        await browser.pause(3000)
    })


    // Set vital values


    it("should navigate to the Capture Vitals page", async () => {
        await $('#breadcrumbs > li:nth-child(1) > a > i').click();
        // Click on "Capture Vitals" tab
        await browser.pause(5000)
        await $("#referenceapplication-vitals-referenceapplication-vitals-extension").click();
        const getTextOfLandingPage = await $('#content > h2');
        //console.log("The text is", getTextOfLandingPage);
        await expect(getTextOfLandingPage).toHaveText('Capture Vitals for Patient');
        // Add assertions to verify navigation if needed
    });

    it("should search for id and capture vitals", async () => {
        //let searchIdText=await $('//*[@id="content"]/div[6]/div[2]/div/span').getText();

        await $("#patient-search").setValue(searchId);
            await browser.pause(5000);

            // Click the first search result
            await $('//*[@id="patient-search-results-table"]/tbody/tr/td[1]').click();
            await browser.pause(5000);
            await $('.icon-arrow-right').click();
            await $('//*[@id="w8"]').setValue(12);
            await $("#next-button").click();
            await $('//*[@id="w10"]').setValue(66);
            await $('//*[@id="formBreadcrumb"]/li[2]/span').click();
            await $('//*[@id="confirmationQuestion"]/p[1]/button').click();
            await browser.pause(5000);

    })

    
    // this logic worked for capture vitakl without registring patients
    /*
    it("should search for and select a patient", async () => {
        // Iterate through patient IDs
        for (let i = 1; i <= 15; i++) {
            const xpath1 = '//*[@id="patient-search-results-table"]/tbody/tr[';
            const xpath2 = ']/td[1]';
            const concat = xpath1 + i + xpath2;

            // Get and extract patient ID
            let getId = await $(`${concat}`);
            let getIdText = await getId.getText();
            let getIdWithSubstring = getIdText.substring(0, 6);

            // Search for the patient
            await $("#patient-search").setValue(getIdWithSubstring);
            await browser.pause(5000);

            // Click the first search result
            await $('//*[@id="patient-search-results-table"]/tbody/tr/td[1]').click();
            await browser.pause(5000);

            // Check if the green arrow button exists
            let arrowRightExist = await ($(".icon-arrow-right")).isExisting();
            if (arrowRightExist) { 
                await $('.icon-arrow-right').click();
                await $('//*[@id="w8"]').setValue(12);
                await $("#next-button").click();
                await $('//*[@id="w10"]').setValue(66);
                await $('//*[@id="formBreadcrumb"]/li[2]/span').click();
                await $('//*[@id="confirmationQuestion"]/p[1]/button').click();
                await browser.pause(5000);

                // Check if the landing page text is as expected
                    //console.log("The text is", getTextOfLandingPage);
            
                // Add assertions to verify patient selection if needed
                break;
            } else {
                console.log("Not found");
                await $(".icon-arrow-left").click();
                await browser.pause(5000);
                // const getTextOfLandingPage = $('#content > h2').getText();

                // await expect(getTextOfLandingPage).to.equal('Capture Vitals for Patient');
            }
        }
    });
*/


    // it("should capture vitals for the selected patient", async () => {
    //     // Set vital values
    //     await $('//*[@id="w8"]').setValue(12);
    //     await $("#next-button").click();
    //     await $('//*[@id="w10"]').setValue(66);
    //     await $('//*[@id="formBreadcrumb"]/li[2]/span').click();
    //     await $('//*[@id="confirmationQuestion"]/p[1]/button').click();
    //     await browser.pause(5000);

    //     // Check if the landing page text is as expected
    //     const getTextOfLandingPage = await $('#content > h2').getText();
    //     console.log("The text is", getTextOfLandingPage);
    //     await expect(getTextOfLandingPage).to.equal('Capture Vitals for Patient');
    // });

    // Add more "it" blocks for additional test cases if needed
});
