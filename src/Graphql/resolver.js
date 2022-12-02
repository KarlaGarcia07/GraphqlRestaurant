const axios = require('axios');
const Menu = require('../db/Menu');

module.exports = {

    Query: {
        getAllMenus: async() => {
            try {
                const res = await axios.get('https://beduushop1.herokuapp.com/v1/menus')
                return res.data;
            } catch(e) {
                console.error(e)
            }
        }
    }, 
    Mutation: {
        createMenus: async(_, {input}) => {
            try {
                const res = await axios.post('https://beduushop1.herokuapp.com/v1/menus', input)
                return res.data;
            } catch(e) {
                console.error(e)
            }
        },
        updateMenus: async(_, {platillo, ...menu}) => {
            try {
                const res = await axios.put(`https://beduushop1.herokuapp.com/v1/menus/${platillo}`, menu);
                return res.data;
            } catch(e) {
                console.error(e)
            }
        },
        deleteMenus: async(_, {platillo}) => {
            try {
                const res = await axios.delete(`https://beduushop1.herokuapp.com/v1/menus`, {data: {platillo} } )
                return res.data;
            } catch(e) {
                console.error(e)
            }
        }
    }
}