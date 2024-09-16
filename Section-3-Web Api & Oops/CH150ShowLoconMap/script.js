const map = L.map('map').setView([0, 0], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0,0]).addTo(map);

navigator.geolocation.getCurrentPosition(function(pos) {
    const lat = pos.coords.latitude;
    const lang = pos.coords.longitude;

    marker.setLatLng([lat,lang]).update();
    map.setView([lat,lang],13);
    marker.bindPopup('<strong>Hello World <br> This is my location</strong>')
})

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();