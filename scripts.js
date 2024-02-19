const allSeat = document.getElementsByClassName('seat');
for (const seat of allSeat) {
    seat.addEventListener('click', function () {
        let count = 0;
        count = count + 1;
        let available = document.getElementById('availabe');
        let selected = document.getElementById('selected');
        const availableSeat = parseInt(available.innerText) - count;
        console.log
            ('availableSeat', availableSeat);
        const selectedSeat = parseInt(selected.innerText) + count;
        console.log('selectedSeat', selectedSeat);
        available.innerText = availableSeat;
        selected.innerText = selectedSeat;
    })
}