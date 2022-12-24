const fetch = require('node-fetch')

const result = fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

	result