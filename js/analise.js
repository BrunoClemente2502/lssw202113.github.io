document.addEventListener('DOMContentLoaded', function() {

    const weatherIcons = [
        'imagens/analise/tempo/cloud-fog-icon.svg',
        'imagens/analise/tempo/cloud-lightning-icon.svg',
        'imagens/analise/tempo/cloud-rain-icon.svg',
        'imagens/analise/tempo/cloud-wind-icon.svg',
        'imagens/analise/tempo/day-cloud-rain-icon.svg',
        'imagens/analise/tempo/day-cloud-rain-lightning-icon.svg',
        'imagens/analise/tempo/day-sunny-icon.svg',
        'imagens/analise/tempo/night-cloud-wind-icon.svg',
        'imagens/analise/tempo/snow-icon.svg',
        'imagens/analise/tempo/wind-icon.svg'
    ];

    const temperatureIcons = [
        'imagens/analise/temperatura/high-temperature-icon.svg',
        'imagens/analise/temperatura/low-temperature-icon.svg',
        'imagens/analise/temperatura/medium-temperature-icon.svg'
    ];

    // Function to randomly select an icon
    function getRandomIcon(icons) {
        const index = Math.floor(Math.random() * icons.length);
        return icons[index];
    }

    // Now using IDs to target images
    const weatherImg = document.getElementById('weather-icon');
    const temperatureImg = document.getElementById('temperature-icon');

    if (weatherImg && temperatureImg) {
        weatherImg.src = getRandomIcon(weatherIcons);
        temperatureImg.src = getRandomIcon(temperatureIcons);
    }
});
