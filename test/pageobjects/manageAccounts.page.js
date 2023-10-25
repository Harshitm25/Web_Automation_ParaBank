class ManageAccount{

    get systemBtn()
    {
        return $('#coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension')
    }
    get manageBtn()
    {
        return $('#org-openmrs-module-adminui-accounts-app')
    }
    get accntBtnExist()
    {
        return $('#content > a')
    }

    get familyNameBtn()
    {
        return $('#adminui-familyName-field')
    }

    get givenNameBtn()
    {
        return $('#adminui-givenName-field')
    }
    get nextClick()
    {
        return $('#adminui-gender-0-field')
    }

    get addUserAcntBtn()
    {
        return $('#adminui-addUserAccount')
    }

    get userNameBtn()
    {
        return $('#adminui-username-field')
    }

    get selectBtn()
    {
        return $('#adminui-privilegeLevel-field')
    }

    get newPassBtn()
    {
        return $('#adminui-password-field')
    }

    get confmPassBtn()
    {
        return $('#adminui-confirmPassword-field')
    }

    get capabilityCheck()
    {
        return $('//*[@id="adminui-capabilities-Application: Administers System"]')
    }

    get addProviderBtn()
    {
        return $('#adminui-addProviderAccount')
    }

    get setValueForAddBtn()
    {
        return $('#adminui-identifier-field')
    }

    get providerRoleBtn()
    {
        return $('#adminui-providerRole-field')
    }

    get saveBtn()
    {
        return $('#save-button')
    }
    get searchName()
    {
        return $('//*[@id="list-accounts_filter"]/label/input')
    }

    get searchBarResult()
    {
        return $('//*[@id="list-accounts"]/tbody/tr/td[1]')
    }

}

module.exports = new ManageAccount();
