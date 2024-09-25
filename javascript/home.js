document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    donateMoney(
      "noakhali-input",
      "noakhali-balance",
      "Taka is Donated for Flood Relief in Noakhali, Bangladesh"
    );
  });
document.getElementById("feni-donate").addEventListener("click", function () {
  donateMoney(
    "feni-input",
    "feni-balance",
    "Taka is Donated for flood Relief in Feni, Bangladesh"
  );
});
document.getElementById("quota-donate").addEventListener("click", function () {
  donateMoney(
    "quota-input",
    "quota-balance",
    "Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh"
  );
});

document.getElementById("donate-btn").addEventListener("click", function () {
  donateOrHistory("donation");
});
document.getElementById("history-btn").addEventListener("click", function () {
  donateOrHistory("history");
});

const button1 = document.getElementById("donate-btn");
const button2 = document.getElementById("history-btn");
button1.style.backgroundColor = "#B4F461";
button1.addEventListener("click", function () {
  button1.style.backgroundColor = "#B4F461";
  button2.style.backgroundColor = "";
});
button2.addEventListener("click", function () {
  button2.style.backgroundColor = "#B4F461";
  button1.style.backgroundColor = "";
});
