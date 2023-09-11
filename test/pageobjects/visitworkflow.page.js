class VisitWorkflow{
    
    get registerPatientBtn()
    {
        return $('//*[@id="referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension"]')
    }

    get nextBtn()
    {
        return $('#next-button')
    }
    get genderBtn()
    {
        return $('//*[@id="gender-field"]/option[1]')
    }

    get birthYears()
    {
        return $('#birthdateYears-field')
    }
    get birthMonth()
    {
        return $('#birthdateMonths-field')
    }
    get addressBtn()
    {
        return $('#address1')
    }
    get submitBtn()
    {
        return $('#submit')
    }

    get startVisitingBtn()
    {
        return $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]')
    }
    get confirmStartVisitingButton()
    {
        return $('#start-visit-with-visittype-confirm')
    }

    get endVisitBtn()
    {
        return $('//*[@id="visit-details"]/div[2]/a[1]')
    }
    get confirmEndVisitBtn()
    {
        return $('//*[@id="end-visit-dialog"]/div[2]/button[1]')
    }

}
module.exports = new VisitWorkflow();
