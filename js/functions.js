const button = document.querySelector('button')
const table = document.querySelector('table')
const resultCountParagraph = document.querySelector('p')

let jokeriRowCount = 0 // Muuttuja, joka laskee jokeririvien määrää

button.addEventListener('click', addJokeriRow) //Kuuntelija painikkeen painamiseen

function addJokeriRow() {
    // a. Lisätään uusi rivi taulukkoon
    const newRow = document.createElement('tr')

    // b. Toteutetaan toistolause, joka suoritetaan 7 kertaa ( Alustetaan laskuri i, joka alkaa nollasta.;Silmukka toistetaan niin kauan, kunnes i saavuttaa 7; Jokaisen toistokerran jälkeen i kasvaa yhdellä.)
    for (let i = 0; i < 7; i++) {
        // c. Luodaan uusi sarake ja asetetaan sen tekstiksi satunnaisluku välillä 0-9
        const newCell = document.createElement('td')
        newCell.textContent = Math.floor(Math.random() * 10); //Math.floor pyöristää alaspäin

        // d. Lisätään sarake riville
        newRow.appendChild(newCell) //liittää uuden solun rivin loppuun.
    }

    // Lisätään rivi taulukkoon. Kun rivi on täytetty seitsemällä sarakkeella (satunnaisluvuilla), lisätään tämä valmis rivi taulukkoon. Taulukko päivittyy käyttöliittymässä.
    table.appendChild(newRow)

    // Päivitetään arvottujen jokeririvien määrä.
    jokeriRowCount++ //Joka kerta, kun käyttäjä painaa painiketta ja uusi rivi lisätään, kasvatetaan muuttujaa jokeriRowCount yhdellä. Tämä laskee, kuinka monta jokeririviä on luotu.
    resultCountParagraph.textContent = `Valmiita rivejä ${jokeriRowCount}` //Päivitetään p-elementin teksti näyttämään päivitetty jokeririvien määrä.
}
