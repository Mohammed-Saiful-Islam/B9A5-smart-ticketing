const allSeat = document.getElementsByClassName('seat');

for (const seat of allSeat) {
    seat.addEventListener('click', function () {

        let count = 0;
        count = count + 1;
        const nextBtn = document.getElementById('next');
        nextBtn.removeAttribute('disabled');
        const available = document.getElementById('availabe');
        const selected = document.getElementById('selected');
        const seat = document.getElementById('seat');
        const seatName = 'A-Z||1-4'
        const seatClass = 'Econonmy Class'
        const seatPrice = 550;
        const seatDeatails = document.getElementById('details');

        const availableSeat = parseInt(available.innerText) - count;
        const selectedSeat = parseInt(selected.innerText) + count;
        const finalSeat = parseInt(seat.innerText) + count;

        available.innerText = availableSeat;
        selected.innerText = selectedSeat;
        seat.innerText = finalSeat;

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = seatPrice;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        li.classList.add('flex');
        li.classList.add('text-black');
        li.classList.add('justify-between');
        li.classList.add('py-2');
        seatDeatails.appendChild(li);

        const total = document.getElementById('total');
        const totalPrice = parseInt(seat.innerText) * seatPrice;
        total.innerText = totalPrice;

        //  NEW15 Couple 20

        const enterCoupon = document.getElementById('apply-input');
        const grand = document.getElementById('grand');
        const apply = document.getElementById('apply-btn');
        const offerInputBtn = document.getElementById('offer-input-btn');
        apply.addEventListener('click', function () {
            const offerPass = enterCoupon.value;
            if (offerPass === 'NEW15') {
                const discount15 = totalPrice * 0.15;
                const grandTotal = totalPrice - discount15;
                grand.innerText = grandTotal;
                offerInputBtn.removeChild(enterCoupon);
                offerInputBtn.removeChild(apply);

            } else if (offerPass === 'Couple 20') {
                const discount20 = totalPrice * 0.2;
                const grandTotal = totalPrice - discount20;
                grand.innerText = grandTotal
                offerInputBtn.removeChild(enterCoupon);
                offerInputBtn.removeChild(apply);

            } else {
                alert('please enter a valid coupon code');
            }
        })
    })
}
const hdr = document.getElementById('hdr');
const main = document.getElementById('main');
const ftr = document.getElementById('ftr');
const nextBtn = document.getElementById('next');
const success = document.getElementById('success');
nextBtn.addEventListener('click', function () {
    hdr.classList.add('hidden');
    main.classList.add('hidden');
    ftr.classList.add('hidden');
    success.classList.remove('hidden');
})
