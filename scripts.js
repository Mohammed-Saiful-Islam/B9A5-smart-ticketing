const allSeat = document.getElementsByClassName('seat');
let available = document.getElementById('availabe');
let count = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        const availableSeat = parseInt(available.innerText) - count;
        console.log(availableSeat);
        const selectedSeat = parseInt(selected.innerText) + count;
        console.log(selectedSeat);
        available.innerText = availableSeat;
        selected.innerText = selectedSeat;
    })
    
}