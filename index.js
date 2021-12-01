const express = require('express');
const exphbs = require('express-handlebars');

const pg = require("pg");
const Pool = pg.Pool;

// should we use a SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
	useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:codex123@localhost:5432/animal_game';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();
const PORT = process.env.PORT || 3012;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', async function (req, res) {
	res.render('index', {
		
	});
});

app.listen(PORT, function () {
	console.log(`Animals on port ${PORT}`)
});
