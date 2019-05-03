// Config file

// MySQL Db config
const dbHost = 'nr84dudlpkazpylz.chr7pe7iynqr.eu-west-1.rds.amazonaws.com';
const dbUsername = 'w3dqhcf5479yml68';
const dbPassword = 'bdwztxowdz2cy3gs';
const dbName =  'owxbsewog8grckyt';
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