document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".bday_input");
    const resultText = document.querySelector(".result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const birthdateInput = document.querySelector(".date");
        const birthdate = new Date(birthdateInput.value);
        const currentDate = new Date();
        let age = calculateAge(currentDate, birthdate);
        resultText.innerHTML = `Your age is: ${age.years} years, ${age.months} months, and ${age.days} days`;
    });

    function calculateAge(currentDate, birthdate) {
        let years = currentDate.getFullYear() - birthdate.getFullYear();
        let months = currentDate.getMonth() - birthdate.getMonth();
        let days = currentDate.getDate() - birthdate.getDate();
        if (days < 0) {
            months--;
            days += new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }
});
