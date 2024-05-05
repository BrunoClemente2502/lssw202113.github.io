document.addEventListener('DOMContentLoaded', function() {
    // Definir array de exemplos
    let events = [
        { date: '2024-05-01', team1: 'FC Porto', team2: 'SL Benfica' },
        { date: '2024-05-08', team1: 'Sporting CP', team2: 'SC Braga' },
        { date: '2024-05-15', team1: 'Vitória SC', team2: 'FC Famalicão' }
    ];

    // Função para formatar a data na forma convencional em Portugal
    function formatDate(dateStr) {
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }

    // Adicionar evento à lista
    function addEventToList(event) {
        const li = document.createElement('li');
        li.textContent = `${formatDate(event.date)} - ${event.team1} vs ${event.team2}`;
        document.getElementById('eventsList').appendChild(li);
    }

    // Actualizar a lista de eventos pela ordem de data
    function updateEventsList() {
        // Limpar lista
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = '';

        // Ordenar pela data
        events.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Adcionar à lista
        events.forEach(event => addEventToList(event));
    }

    // Iniciar a lista
    updateEventsList();

    document.getElementById('registo-evento').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const eventDate = document.getElementById('dataEvento').value;
        const team1 = document.getElementById('visitado').value;
        const team2 = document.getElementById('visitante').value;

        // Criar novo objecto
        const newEvent = { date: eventDate, team1: team1, team2: team2 };

        // Adicionar o novo evento
        events.push(newEvent);

        // Actualizar a lista
        updateEventsList();

        // Limpar os campos de formulário
        this.reset();
    });
});
