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

  * `/providers` -- Get all providers available
  * `/providers/:name` -- Get specific provider by name


### Example Request:

`GET https://viabrico-api.herokuapp.com/providers/UtConsulting`


### Example Response:

```json
{
  "id" : 4,
  "name" : "UtConsulting",
  "description" : "consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
  "phone_number" : "0262956050",
  "email" : "lacus.aliquam@ullamcorper.edu",
  "address" : "489-1966 Vitae, Ave"
}
```


### Attributes:

  * `name` _string_ -- Provider name
  * `description` _string_ -- Provider description
  * `phone_number` _string_ -- Provider phone number
  * `email` _string_ -- Provider email
  * `address` _string_ -- Provider address

#

## User

A User ressource is a user who can connect to API.

### Endpoints:

  * `/users` -- Check if JSON.login and JSON.password exist (Send same JSON if exact)


### Example Request:

`POST https://viabrico-api.herokuapp.com/providers/UtConsulting`

```json
{
  "login" : "username@viabrico.fr",
  "password" : "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

### Example Response:

```json
{
  "login": "username@viabrico.fr",
  "password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```


### Attributes:

  * `login` _string_ -- User login
  * `password` _string_ -- User password

  
  
# Contributors 
### Here's the full list of the collaborators for this project
- [@adrienvaucard](https://github.com/adrienvaucard "Go to @adrienvaucard's Github")
- [@Kwoak](https://github.com/Kwoak "Go to @Kwoak's Github")
- [@MathisLeRoyNivot](https://github.com/MathisLeRoyNivot "Go to @MathisLeRoyNivot's Github")
- [@tanguy85](https://github.com/tanguy85 "Go to @tanguy85's Github")




