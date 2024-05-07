document.addEventListener('DOMContentLoaded', function() {
    //array com os icones para simular a meteorologia
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

    //array com os icones para simular a temperatura
    const temperatureIcons = [
        'imagens/analise/temperatura/high-temperature-icon.svg',
        'imagens/analise/temperatura/low-temperature-icon.svg',
        'imagens/analise/temperatura/medium-temperature-icon.svg'
    ];

    // função para selecionar um ícone aleatório
    function getRandomIcon(icons) {
        const index = Math.floor(Math.random() * icons.length);
        return icons[index];
    }

    
    const weatherImg = document.getElementById('weather-icon');
    const temperatureImg = document.getElementById('temperature-icon');

    if (weatherImg && temperatureImg) {
        weatherImg.src = getRandomIcon(weatherIcons);
        temperatureImg.src = getRandomIcon(temperatureIcons);
    }




    //Cores dos níveis
    function getColorForLevel(level) {
        switch(parseInt(level)) {
            case 1: return 'green';
            case 2: return 'yellow';
            case 3: return 'orange';
            case 4: return 'red';
            case 5: return 'black';
            default: return 'transparent';
        }
    }

    //estilização de acordo com o número
    const levelSpans = document.querySelectorAll("#recinto .stadium-info span, #supporters-risk p span");
    levelSpans.forEach(span => {
        const level = parseInt(span.textContent.trim());
        span.style.backgroundColor = getColorForLevel(span.textContent.trim());
        span.style.padding = '5px 10px'; 
        span.style.display = 'inline-block'; 
        span.style.textAlign = 'center'; 
        span.style.borderRadius = '5px';
        
        if (level == 5) {
            span.style.color = 'white';
        } else {
            span.style.color = 'black'; // Set to black or any other color for levels other than 5
        }
        
    });
});







