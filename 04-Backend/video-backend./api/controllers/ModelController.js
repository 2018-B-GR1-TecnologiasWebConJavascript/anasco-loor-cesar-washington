/**
 * ModelController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `ModelController.Raza()`
   */
  Raza: async function (req, res) {
    return res.json({
      todo: 'Raza() is not implemented yet!'
    });
  }

};

//ESTANDAR RESTFULL

//MODELO: Raza

//Find->
//http://localhost:1337/Raza
//METODO HTTP: GET

//CREATE->
//http://localhost:1337/Raza
//METODO HTTP: POST
//Parametros


//UPDATE->
//http://localhost:1337/Raza/ID
//http://localhost:1337/Raza/10
//METODO HTTP: PUT
//Parametros

//DELETE->
//http://localhost:1337/Raza/ID
//http://localhost:1337/Raza/10
//METODO HTTP: DELETE

//Find One  by ID->
//http://localhost:1337/Raza/ID
//http://localhost:1337/Raza/10
//METODO HTTP: GET

//PARAMETROS

// Query Params
// http://localhost:1337/Raza?nombre=Adrian&apellido=Eguez


// Route Params

// Form Params (Body Params)

