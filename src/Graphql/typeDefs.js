module.exports = `

type Menu{
    _id: ID,
    platillo: String!,
    origen: String,
    tiempo: Int,
    proteina: Int,
    carbo: Int
}

input NewMenu{
    platillo: String!,
    origen: String,
    tiempo: Int,
    proteina: Int,
    carbo: Int

}

type Query{
    getAllMenus:[Menu]
}

type Mutation{
    createMenus(input: NewMenu): Menu
    updateMenus(platillo: String!, origen: String, tiempo: Int, proteina: Int, carbo: Int):Menu
    deleteMenus(platillo: String!):Menu
}

`