const express = require('express');
const cities = require('./data/city.list.json');
const app = express();
const port = process.env.PORT || 3000;

const getCityByName = nameOfCity => cities.filter(city => new RegExp(nameOfCity, 'i').test(city.name));
const isValidRequest = request => request && /^[a-z]+$/i.test(request);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/getCity/', (req, res) => {
    const requestCity = req.query.name;
    if (isValidRequest(requestCity)) {
        res.json({
            status: 'ok',
            data: getCityByName(requestCity),
        });
    } else {
        res.json({
            status: 'Something goes wrong',
            data: [],
        });
    }
});

app.use('*', (req, res) => res.send(''));

app.listen(port, function() {
    console.log(`Server is running on ${port}`);
});
