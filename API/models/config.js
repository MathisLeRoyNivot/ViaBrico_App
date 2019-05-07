// Config file

// MySQL Db config
const dbHost = '<dbHost>';
const dbUsername = '<dbUsername>';
const dbPassword = '<dbPassword>';
const dbName =  '<dbName>';
const dbTableUsers = 'compte';
const dbTableProviders = 'fournisseur';

// MySQL Db config Local host
// const dbHost = 'localhost';
// const dbUsername = 'root';
// const dbPassword = '';
// const dbName =  'bdd-viabrico';
// const dbTableUsers = 'compte';
// const dbTableProviders = 'fournisseur';

// Exportation des variables
module.exports = {
    dbHost,
    dbUsername,
    dbPassword,
    dbName,
    dbTableUsers,
    dbTableProviders
}