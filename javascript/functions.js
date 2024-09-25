function donateMoney(inputId, balanceId, str) {
  const inputValue = document.getElementById(inputId).value;
  const inputValueFloat = parseFloat(inputValue);
  const balanceMoney = document.getElementById(balanceId).innerText;
  const balanceValue = parseFloat(balanceMoney);
  const mainBalance = document.getElementById("main-balance").innerText;
  const mainBalanceValue = parseFloat(mainBalance);
  if (
    mainBalanceValue >= inputValueFloat &&
    inputValueFloat > 0 &&
    isNaN(inputValueFloat) === false
  ) {
    document.getElementById(balanceId).innerText = `${
      balanceValue + inputValueFloat
    } BDT`;
    document.getElementById("main-balance").innerText = `${
      mainBalanceValue - inputValue
    } BDT`;
  } else {
    alert("invalied Donation Amount");
    document.getElementById("my_modal_5").classList.add("hidden");
  }
  // history part

  const logContainer = document.getElementById("log-container");
  // logContainer.classList.add("border rounded-4");
  // logContainer.style.border = "1px solid gray"
  const div = document.createElement("div");
  div.style.border = "1px solid rgba(17, 17, 17, 0.1)";
  div.style.marginBottom = "32px";
  div.style.borderRadius = "16px";
  div.style.padding = "32px";
  const currentTime = new Date().toString();
  const paragraph = document.createElement("p");
  paragraph.textContent = `Date: ${currentTime}`;
  const p = document.createElement("p");
  p.textContent = `${inputValueFloat} ${str}`;
  p.style.fontSize = "x-large";
  p.style.fontWeight = "bold";
  p.style.color = "black";
  p.style.marginBottom = "16px";
  div.appendChild(p);
  div.appendChild(paragraph);
  logContainer.appendChild(div);
  // logContainer.appendChild(paragraph);
}

function donateOrHistory(id1) {
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
  document.getElementById(id1).classList.remove("hidden");
}
