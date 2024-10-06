let countdownInterval;

function startCountdown() {
    const daysInput = document.getElementById('daysInput').value;
    const days = parseInt(daysInput);

    if (isNaN(days) || days <= 0) {
        alert("Indtast venligst et gyldigt antal dage.");
        return;
    }

    clearInterval(countdownInterval);

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + days);

    countdownInterval = setInterval(() => {
        const now = new Date();
        const remainingTime = endDate - now;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = "Nedtællingen er slut!";
            return;
        }

        const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerText = `Resterende dage: ${remainingDays}`;
    }, 1000);
}
