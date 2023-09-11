class EditRegister{

    get editInfo()
    {
        return $('//*[@id="application.registrationapp.summary.editPatientLink"]/div/div[2]')
    }

    get editName()
    {
        return $('#demographics-edit-link')
    }

    get saveBtn()
    {
        return $('//*[@id="formBreadcrumb"]/li[2]/span')
    }

    get submitBtn()
    {
        return $('#registration-submit')
    }

    get updatedInfotext()
    {
        return $('//*[@id="content"]/div[9]/div[1]/div/div[1]/div[1]/div[2]/div[1]/p')
    }

}


module.exports = new EditRegister();
