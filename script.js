const convertBtn = document.querySelector(".convertBtn");
const baseSelect = document.querySelector("#baseSelect");
const currencySelect = document.querySelector("#currencySelect");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
const errorMessage = document.querySelector("#errorMessage");

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const base = baseSelect.value;
  const currency = currencySelect.value;

  const coinData = fetch(
    `https://api.coinbase.com/v2/prices/${base}-${currency}/buy`
  );

  coinData
    .then((res) => {
      if (res.ok) {
        console.log(res.json())
        return res.json();
      } else {
        errorMessage.classList.remove("d-none");
        baseSelect.classList.add("border");
        baseSelect.classList.add("border-danger");
        currencySelect.classList.add("border");
        currencySelect.classList.add("border-danger");
        //throw new Error("select crypto currencies");
      }
    })
    .then((result) => {
      const amount = Number(result.data.amount);
      const inputValue = Number(input.value);
      output.value = (amount * inputValue).toFixed(2);
    });
  //.catch((err) => alert(err));
});
