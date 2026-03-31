$(document).ready(function () {
    console.log("Сторінка завантажена");
    console.log("jQuery підключено успішно");

    function setActiveMenuItem(link) {
        try {
            if (!link || link.length === 0) {
                throw new Error("Елемент меню не знайдено");
            }

            console.log("Натиснуто на пункт меню:", link.text());

            $("#mainNav .nav-link").removeClass("active");
            link.addClass("active");

            console.log("Активний пункт меню змінено успішно");
        } catch (error) {
            console.log("Помилка:", error.message);
            alert("Не вдалося змінити активний пункт меню");
        }
    }

    $("#mainNav .nav-link").on("click", function () {
        setActiveMenuItem($(this));
    });
});
$(document).ready(function () {
    console.log("Сторінка завантажена");
    console.log("Запуск відображення дати і часу");

    function updateDateTime() {
        try {
            const now = new Date();

            if (!now) {
                throw new Error("Не вдалося отримати дату");
            }

            const formatted = now.toLocaleString("uk-UA");

            console.log("Поточна дата і час:", formatted);

            $("#dateTime").text("Дата і час: " + formatted);

        } catch (error) {
            console.log("Помилка:", error.message);
            $("#dateTime").text("Помилка відображення дати");
        }
    }

    // запуск одразу
    updateDateTime();

    // оновлення кожну секунду
    setInterval(updateDateTime, 1000);
});