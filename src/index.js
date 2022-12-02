require('dotenv').config();
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const resolvers = require('./Graphql/resolver');
const typeDefs = require('./Graphql/typeDefs');
const {connect} = require('mongoose');

connect(process.env.MONGOURI)
    .then(function() { 
        console.log("Conectado con MongoDB")
    });

const server = new ApolloServer({resolvers, typeDefs})

startStandaloneServer(server, {
    listen: {port:process.env.PORT}
}).then(function(){ 
    console.log('Servidor Apollo Corriendo! Escuchando el puerto 4001');
})