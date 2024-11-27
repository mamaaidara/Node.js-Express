
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

function isWorkingHours() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
}


app.use((req, res, next) => {
    if (isWorkingHours()) {
        next();
    } else {
        res.send("<h1>Le site est actuellement fermé. Veuillez revenir pendant les heures de travail (du lundi au vendredi, de 9h à 17h).</h1>");
    }
});


app.get('/', (req, res) => {
    res.render('acceuil');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
