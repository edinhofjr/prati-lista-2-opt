import prompt from "./prompt.js";
let hotels = [];
let reservations = [];
let next_hotel_id = 1;
let next_reservation_id = 1;

function add_hotel(name, city, total_rooms) {
    hotels.push({
        id: next_hotel_id++,
        name: name,
        city: city,
        total_rooms: total_rooms,
        available_rooms: total_rooms
    });
    alert(`Hotel "${name}" added successfully.`);
}

function search_hotels_by_city(city) {
    const results = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());
    if (results.length === 0) {
        alert(`No hotels found in city: ${city}`);
    } else {
        let message = `Hotels available in ${city}:\n`;
        results.forEach(hotel => {
            message += `ID: ${hotel.id}, Name: ${hotel.name}, Available Rooms: ${hotel.available_rooms}\n`;
        });
        alert(message);
    }
}

function make_reservation(hotel_id, client_name) {
    const hotel = hotels.find(h => h.id === hotel_id);
    if (!hotel) {
        alert("Hotel not found.");
        return;
    }
    if (hotel.available_rooms <= 0) {
        alert("No rooms available in this hotel.");
        return;
    }
    hotel.available_rooms--;
    reservations.push({
        reservation_id: next_reservation_id++,
        hotel_id: hotel_id,
        client_name: client_name
    });
    alert(`Reservation successfully made for ${client_name} at "${hotel.name}".`);
}

function cancel_reservation(reservation_id) {
    const index = reservations.findIndex(r => r.reservation_id === reservation_id);
    if (index === -1) {
        alert("Reservation not found.");
        return;
    }
    const reservation = reservations[index];
    const hotel = hotels.find(h => h.id === reservation.hotel_id);
    if (hotel) {
        hotel.available_rooms++;
    }
    reservations.splice(index, 1);
    alert(`Reservation ${reservation_id} canceled successfully.`);
}

function list_reservations() {
    if (reservations.length === 0) {
        alert("No reservations found.");
        return;
    }
    let message = "List of reservations:\n";
    reservations.forEach(reservation => {
        const hotel = hotels.find(h => h.id === reservation.hotel_id);
        message += `Reservation ID: ${reservation.reservation_id}, Client: ${reservation.client_name}, Hotel: ${hotel.name}, City: ${hotel.city}\n`;
    });
    alert(message);
}

function show_menu() {
    let option;
    do {
        option = prompt(
`HOTEL RESERVATION SYSTEM

1. Add Hotel
2. Search Hotels by City
3. Make Reservation
4. Cancel Reservation
5. List Reservations
6. Exit

Enter option (1-6):`
        );

        switch (option) {
            case "1":
                const name = prompt("Enter hotel name:");
                const city = prompt("Enter city:");
                const rooms = parseInt(prompt("Enter total rooms:"), 10);
                if (!isNaN(rooms) && rooms > 0) {
                    add_hotel(name, city, rooms);
                } else {
                    alert("Invalid number of rooms.");
                }
                break;
            case "2":
                const search_city = prompt("Enter city to search:");
                search_hotels_by_city(search_city);
                break;
            case "3":
                const res_hotel_id = parseInt(prompt("Enter hotel ID:"), 10);
                const client_name = prompt("Enter client name:");
                make_reservation(res_hotel_id, client_name);
                break;
            case "4":
                const res_id = parseInt(prompt("Enter reservation ID to cancel:"), 10);
                cancel_reservation(res_id);
                break;
            case "5":
                list_reservations();
                break;
            case "6":
                alert("Exiting system.");
                break;
            default:
                alert("Invalid option.");
        }
    } while (option !== "6");
}

show_menu();
