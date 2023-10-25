class captureVitals{

    get backBtn(){
        return $('#breadcrumbs > li:nth-child(1) > a > i')
    }

    get captureVitalBtn()
    {
        return $("#referenceapplication-vitals-referenceapplication-vitals-extension")
    }

    get textofPage()
    {
       return  $('#content > h2')
    }

    get captureId()
    {
        return $('//*[@id="content"]/div[6]/div[2]/div/span')
    }
    get startVisitBtn()
    {
        return $('//*[@id="org.openmrs.module.coreapps.createVisit"]/div/div[2]')
    }
    get confirmVisitBtn()
    {
        return $('#start-visit-with-visittype-confirm');
    }

    get endVisitBtn()
    {
        return $('//*[@id="visit-details"]/div[2]/a[1]');
    }

    get patientSearchBtn()
    {
        return $('#patient-search');
    }

    get firstSearchResult()
    {
        return $('//*[@id="patient-search-results-table"]/tbody/tr/td[1]')
    }
    
    get iconRightArrowBtn()
    {
        return $('.icon-arrow-right');
    }

    get fillMonthBtn()
    {
        return $('//*[@id="w8"]');
    }
    get nextBtn()
    {
        return $("#next-button")
    }
    get fillYearBtn()
    {
        return $('//*[@id="w10"]');
    }

    get submitBtn()
    {
        return $('//*[@id="formBreadcrumb"]/li[2]/span')
    }

    get confirmSubmitBtn()
    {
        return $('//*[@id="confirmationQuestion"]/p[1]/button')
    }

}

module.exports = new captureVitals();
