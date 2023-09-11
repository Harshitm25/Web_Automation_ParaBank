class ChangePassword{

    get selectAccount()
    {
        return $('//*[@id="navbarSupportedContent"]/ul/li[1]')
    }

    get myAccntBtn()
    {
        return $('//*[@id="user-account-menu"]/li/a')
    }

    get changePasswdBtn()
    {
        return $('//*[@id="tasks"]/a[1]')
    }
    
    get oldPasswordBtn()
    {
       return $('#oldPassword-field')
    }

    get newPasswdField()
    {
        return $('#newPassword-field')
    }
    get confmPasswordField()
    {
        return $('#confirmPassword-field')
    } 
    get saveBtn()
    {
        return $('#save-button')
    }

    get logoutBtn()
    {
        return $('//*[@id="navbarSupportedContent"]/ul/li[3]/a')
    }

    
}


module.exports = new ChangePassword();
