
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || "Selected Plan";
    document.getElementById('planTitle').textContent = plan + " - Payment";

    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('cardName').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        // Validation Name
        if(name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)){
            alert("Please enter a valid cardholder name.");
            return;
        }

        // Validation Card Number (16 digits)
        if(!/^\d{16}$/.test(cardNumber)){
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        // Validation Expiry Date MM/YY
        if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)){
            alert("Please enter a valid expiry date in MM/YY format.");
            return;
        } else {
            // تحقق أن التاريخ لم ينتهي
            const parts = expiry.split('/');
            const month = parseInt(parts[0], 10);
            const year = parseInt('20' + parts[1], 10);
            const today = new Date();
            const expiryDate = new Date(year, month);
            if(expiryDate < today){
                alert("Card is expired. Please enter a valid expiry date.");
                return;
            }
        }

        // Validation CVV (3 digits)
        if(!/^\d{3}$/.test(cvv)){
            alert("Please enter a valid 3-digit CVV.");
            return;
        }

        // إذا كل شيء صحيح
        const successOverlay = document.getElementById('successOverlay');
const successText = document.getElementById('successText');
const goHomeBtn = document.getElementById('goHomeBtn');

successText.textContent = `You have successfully purchased the ${plan} plan. 🎉`;
successOverlay.classList.remove('hidden');

goHomeBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
});

    });

    // Formatting card number أثناء الكتابة
    const cardInput = document.getElementById('cardNumber');
    cardInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').substring(0,16);
        let formatted = value.match(/.{1,4}/g);
        if(formatted){
            e.target.value = formatted.join(' ');
        }
    });

    // Formatting expiry MM/YY أثناء الكتابة
    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').substring(0,4);
        if(value.length >= 3){
            e.target.value = value.substring(0,2) + '/' + value.substring(2,4);
        } else {
            e.target.value = value;
        }
    });