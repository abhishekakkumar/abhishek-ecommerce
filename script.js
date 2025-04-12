let selectedFlat = null;
function selectFlat(flatName) {
    selectedFlat = flatName;

    document.getElementById('bookingForm').style.display = 'block';
}

function cancelBooking() {
    selectedFlat = null;
    document.getElementById('bookingForm').style.display = 'none';
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const bookingDate = document.getElementById('bookingDate').value;

    if (selectedFlat && name && bookingDate) {
        alert(`Booking Confirmed!\n\nFlat: ${selectedFlat}\nName: ${name}\nDate: ${bookingDate}`);
        cancelBooking();
    } else {
        alert('Please fill out all fields!');
    }
});
