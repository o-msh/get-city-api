List of cities from [openweathermap](http://openweathermap.org) ([Source](http://bulk.openweathermap.org/sample/)).

Technology stack - **NodeJS vs Express**.

## Usage

1. Send `GET` request with `name` parameter to https://peaceful-oasis-27039.herokuapp.com/api/getCity
2. Example for searching Lutsk city - https://peaceful-oasis-27039.herokuapp.com/api/getCity?name=luts
3. Response will be following:

```json
{
    "status": "ok",
    "data": [
        {
            "id": 2853090,
            "name": "Plutscheid",
            "country": "DE",
            "coord": {
                "lon": 6.41667,
                "lat": 50.083328
            }
        },
        {
            "id": 702569,
            "name": "Lutsk",
            "country": "UA",
            "coord": {
                "lon": 25.34244,
                "lat": 50.759319
            }
        },
        {
            "id": 621741,
            "name": "Slutsk",
            "country": "BY",
            "coord": {
                "lon": 27.5597,
                "lat": 53.027401
            }
        }
    ]
}
```
This app using in [weather application](https://github.com/o-msh/weather-app).
