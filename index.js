const fetch = require('node-fetch');

const apiKey = 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDI0MjYzNDMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJyb2RyaWdvZ2FzdG9uZ3V6bWFuQGdtYWlsLmNvbSJ9.YJwr1nI9001SW6Yb2p2svbA6EyjJQlK955IggpiIyQCrUenhj3pywmvOSap6gt4P3OCw2mULXEfWNoJYWf7VPA';
let consult = 'usd_of_minorista'
let dayNow = '2019-10-11'

async function getDolarBCRA() 
{   
    const API_DOLAR_BCRA  = 'https://api.estadisticasbcra.com/'+consult
    const HEADERS_DOLAR_BCRA = {
        method: "GET",
        headers: {
           "Authorization": apiKey
        }
    }

    let response = await fetch(API_DOLAR_BCRA,HEADERS_DOLAR_BCRA)
    let json = await response.json();


    if(response.status!==200)
        {
            console.log('La cotización no fue exitosa')
        }
    else
        {
            let filteredProducts = getFilteredByKey(json, "d", dayNow);
            console.log(filteredProducts);
        }
};

function getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

  
getDolarBCRA();