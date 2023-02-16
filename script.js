const firstCurrency = document.getElementById("first-currency")
const secondCurrency = document.getElementById("second-currency")
const firstWorth = document.getElementById("first-worth")
const secondWorth = document.getElementById("second-worth")
const exchangeRate = document.getElementById("exchange-rate")

updateCurrency()

function updateCurrency() {
	fetch( `https://v6.exchangerate-api.com/v6/7c477f7f91d8376c17c43b2c/latest/${firstCurrency.value}`)
	.then(response => response.json())
	.then(data => {
		const rate = data.conversion_rates[secondCurrency.value]

		exchangeRate.innerText = `1 ${firstCurrency.value} = ${rate + " " + secondCurrency.value}` 

		secondWorth.value = firstWorth.value * rate.toFixed(2)
	})
}

firstCurrency.addEventListener("change", updateCurrency)

secondCurrency.addEventListener("change", updateCurrency)

firstWorth.addEventListener("input", updateCurrency)


