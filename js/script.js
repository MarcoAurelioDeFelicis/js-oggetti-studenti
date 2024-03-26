console.log ("Oggetti Studenti");

const Studenti = [
    {
        nome: 'Marco',
        cognome: 'De felicis',
        età: '22',
    },
    {
        nome: 'Fabio',
        cognome: 'Moro',
        età: '25',
    },
    {
        nome: 'Leonardo',
        cognome: 'Leo',
        età: '21',
    },
    {
        nome: 'Francesca',
        cognome: 'Russo',
        età: '24',
    },
    {
        nome: 'Sara',
        cognome: 'Celeste',
        età: '20',
    },
]

// ciclo for

for (let i = 0; i < Studenti.length; i++) {
    const studente = Studenti[i];
    console.log (Studenti[i].nome , Studenti[i].cognome)

}

// forEach

