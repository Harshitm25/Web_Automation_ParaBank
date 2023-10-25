const loginPage = require("../pageobjects/login.page");
const captureVitals = require('../pageobjects/copycapturevitals.page');
const copycapturevitalsPage = require("../pageobjects/copycapturevitals.page");
describe("My Login application", () => {
    let searchId;
    it("it should login page", async () => {
        await browser.url("/");
        await loginPage.inputUsername.setValue("dhoni");
        await loginPage.inputPassword.setValue("Msdhoni13");
        await loginPage.pharmacyBtn.click();
        await loginPage.btnSubmit.click();
        await expect(browser).toHaveTitle('Home');
    })

    it("click on register a patient", async () => {
        let selector = await $('//*[@id="referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension"]').click();
        await browser.keys(['T', 'e', 's', 't']);
        await browser.keys(['\uE007']);
        await browser.keys(['\uE007']);

        await browser.keys(['h', 'a', 'r', 's']);
        await browser.pause(4000)
        await $('#next-button').click();
        await $('//*[@id="gender-field"]/option[1]').click();
        await $('#next-button').click();
        await $('#birthdateYears-field').setValue('12');
        await $('#birthdateMonths-field').setValue('10');
        await $('#next-button').click();
        await $('#address1').setValue('abc');
        await $('#next-button').click();
        await $('#next-button').click();
        await $('#next-button').click();


        await $('#submit').click();

        await browser.pause(5000)

    })

    it("record id and start visiting workflow", async () => {
        searchId = await copycapturevitalsPage.captureId.getText();
        await copycapturevitalsPage.startVisitBtn.click();
        await copycapturevitalsPage.confitmVisitBtn.click();
        await browser.pause(3000)
        let endVisitBtn = await copycapturevitalsPage.endVisitBtn;
        await expect(endVisitBtn).toBeExisting();
        await browser.pause(3000)

        await browser.pause(3000)
    })




    it("should navigate to the Capture Vitals page", async () => {
        await copycapturevitalsPage.backBtn.click();
        await browser.pause(5000)
        await captureVitals.captureVitalBtn.click();
        let getTextOfLandingPage = copycapturevitalsPage.textofPage;
        await expect(getTextOfLandingPage).toHaveText('Capture Vitals for Patient');
    });

    it("should search for id and capture vitals", async () => {

        await copycapturevitalsPage.patientSearchBtn.setValue(searchId);
        await browser.pause(5000);
        await copycapturevitalsPage.firstSearchResult.click();
        await browser.pause(5000);
        await copycapturevitalsPage.iconRightArrowBtn.click();
        await copycapturevitalsPage.fillMonthBtn.setValue(12);
        await copycapturevitalsPage.nextBtn.click();
        await copycapturevitalsPage.fillYearBtn.setValue(66);
        await copycapturevitalsPage.submitBtn.click();
        await copycapturevitalsPage.confirmSubmitBtn.click();
        await browser.pause(5000);

    })
});
