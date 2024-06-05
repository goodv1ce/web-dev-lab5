// Функція для показу підказки
function showTooltip(event, text) {
    // Створюємо або відновлюємо підказку
    var tooltip = document.querySelector(".tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        document.body.appendChild(tooltip);
    }

    // Встановлюємо текст підказки
    tooltip.textContent = text;

    // Встановлюємо положення підказки
    tooltip.style.top = (event.clientY + 10) + "px";
    tooltip.style.left = (event.clientX + 10) + "px";

    // Показуємо підказку
    tooltip.style.display = "block";

    // Відслідковуємо рух миші, щоб підказка не зникла при наведенні на неї
    document.addEventListener("mousemove", function(event) {
        tooltip.style.top = (event.clientY + 10) + "px";
        tooltip.style.left = (event.clientX + 10) + "px";
    });
}
