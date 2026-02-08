document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('map')) {
        const map = L.map('map').setView([47.39679, 8.60023], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([47.39679, 8.60023])
            .addTo(map)
            .bindPopup('Zürich Hunters – Three Point');
    }
});