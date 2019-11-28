
var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');
const indexLink = `https://restcountries.eu/rest/v2/alpha/${param}`;

function renderData(data) {
    const container = $('.container');
    let pArray = []
    let body = $(document.getElementsByTagName('body'))
    let countryHeader =  $(document.createElement('h1'));
    countryHeader.addClass('header');
    countryHeader.append(data.name);
    body.prepend(countryHeader);
    for(let i = 0; i < 5; i ++) {
    	pArray[i] = $(document.createElement('p')); 
    	pArray[i].addClass('country')
    }
    let spn1 = $(document.createElement('span'));
    spn1.addClass('country')
    spn1.text(data.capital)
    pArray[0].text("capital");
    pArray[0].append(spn1);
    //pArray[0].text("Capital" + data.capital);
    let spn2 = $(document.createElement('span'));
    spn2.addClass('country')
    spn2.text(data.alpha3Code)
    pArray[1].text("code");
    pArray[1].append(spn2);
    //pArray[1].text(data.alpha3Code);
    flag = data.alpha3Code.toLowerCase();
    let spn0 = $(document.createElement('span'));
    spn0.addClass('country')
    spn0.text(data.currencies[0].name)
    pArray[2].text("currency");
    pArray[2].append(spn0);
    //pArray[2].text(data.currencies[0].name);
    let spn3 = $(document.createElement('span'));
    spn3.addClass('country')
    spn3.text(data.population)
    pArray[3].text("population");
    pArray[3].append(spn3);
    //pArray[3].text(data.population);
    var img = $('<img id="dynamic">');
    img.attr('src', `https://restcountries.eu/data/${flag}.svg`);
    pArray[4].append(img);
    for(let i = 0; i < pArray.length; i++) {
    	container.append(pArray[i]);
    }
}

function jqueryParseData(response, status) {
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadCountry() {
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}


$(document).ready(function() {
    jqueryLoadCountry();
});
