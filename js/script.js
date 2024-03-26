console.log ("Oggetti Studenti");

// <MILESTONE 1>
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
// for (let i = 0; i < Studenti.length; i++) {
//     const studente = Studenti[i];
//     console.log (Studenti[i].nome , Studenti[i].cognome)
// }

// forEach
Studenti. forEach (studente => {
    console.log(studente.nome, studente.cognome);
})

// </MILESTONE 1>

// <MILESTONE 2>

const nuovoNome = prompt ('inserisci il nome del nuovo studente')
//console.log (nuovoNome)

const nuovoCognome = prompt ('inserisci il congnome del nuovo alunno')
//console.log (nuovoCognome)

const nuovaEtà = prompt ("inserisci l'età del nuovo alunno")
//console.log (nuovaEtà)

let nuovoAlunno = {
    nome: nuovoNome,
    cognome: nuovoCognome,
    età: nuovaEtà
}
//console.log (nuovoAlunno)

Studenti.push (nuovoAlunno)

//ciclo for
// for (let i = 0; i < Studenti.length; i++) {
//      const studente = Studenti[i];
//      console.log (Studenti[i].nome , Studenti[i].cognome)
//     }

// forEach
Studenti. forEach (studente => {
    console.log(studente.nome, studente.cognome);
})


// </MILESTONE 2>