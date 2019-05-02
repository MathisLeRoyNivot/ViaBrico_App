# Installation

To start the API, you have to modify DB informations in `models/config.js`

```js
// MySQL Db config
const dbHost = '<DB Host>';
const dbUsername = '<DB Username>';
const dbPassword = '<DB Password>';
const dbName =  '<DB Name>';
const dbTableUsers = 'compte';
const dbTableProviders = 'fournisseur';
```
You have to install dependencies too.

`npm install`

Then, run:

`node server.js`

# Usage

## Provider

A provider ressource is a part of enterprise providers.

### Endpoints:

  * `/provider` -- Get all providers available
  * `/provider/:id` -- Get specific provider by ID


### Example Request:

`GET https://viabrico-api.herokuapp.com/providers/1`


### Example Response:

```json
{
  "id" : 1,
  "name" : "In Mi Pede Ltd",
  "description" : "Donec nibh. Quisque nonummy ipsum non arcu. Vivamus si amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.",
  "address" : "Appartement 346-148 Vel Avenue",
  "phone_number" : "366836355",
  "email" : "sollicitudin@ligula.net"
}
```


### Attributes:

  * `name` _string_ -- Provider name
  * `description` _string_ -- Provider description
  * `address` _string_ -- Provider address
  * `phone_number` _string_ -- Provider phone number
  * `email` _string_ -- Provider email



# Contributors 
### Here's the full list of the collaborators for this project
- [@adrienvaucard](https://github.com/adrienvaucard "Go to @adrienvaucard's Github")
- [@Kwoak](https://github.com/Kwoak "Go to @Kwoak's Github")
- [@MathisLeRoyNivot](https://github.com/MathisLeRoyNivot "Go to @MathisLeRoyNivot's Github")
- [@tanguy85](https://github.com/tanguy85 "Go to @tanguy85's Github")




