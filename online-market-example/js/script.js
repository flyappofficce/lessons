// js/script.js
// Урок 18: простий JS для інтерактивності

// Приклад: показ повідомлення при кліку на кнопку товару
document.querySelectorAll(".product-card a").forEach((button) => {
  button.addEventListener("click", (e) => {
    alert("Ви переходите на сторінку товару!");
  });
});
