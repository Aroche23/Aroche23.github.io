// Cuando el documento esté cargado, inicializa el mapa
document.addEventListener('DOMContentLoaded', () => {
    // Configuración inicial del mapa
    const map = L.map('map').setView([19.432608, -99.133209], 13); // Coordenadas de Ciudad de México

    // Cargar los tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Agregar un marcador inicial
    const initialMarker = L.marker([19.432608, -99.133209]).addTo(map)
        .bindPopup('Ciudad de México<br>Marcador inicial.')
        .openPopup();

    // Agregar marcadores dinámicamente al hacer clic en el mapa
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;

        L.marker([lat, lng]).addTo(map)
            .bindPopup(`Nuevo marcador en:<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`)
            .openPopup();
    });

    // Opcional: Agregar más marcadores de ejemplo
    const exampleLocations = [
        { lat: 19.427, lng: -99.167, popup: 'Punto de interés 1' },
        { lat: 19.435, lng: -99.145, popup: 'Punto de interés 2' },
    ];

    exampleLocations.forEach((loc) => {
        L.marker([loc.lat, loc.lng]).addTo(map)
            .bindPopup(loc.popup);
    });
});
