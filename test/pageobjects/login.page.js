class LoginPage {
    
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }
    get pharmacyBtn()
    {
        return $('#Pharmacy')
    }

    get btnSubmit () {
        return $('#loginButton');
    }

    
}

module.exports = new LoginPage();
