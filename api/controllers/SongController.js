/**
 * SongController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  test: function(req, res) {
      console.log('testing testing');
      
      (async () =>{
          var name = req.param('name')
        // await Song.create({name: 'joeee'})
        var createdUser = await Song.create({name: name}).fetch();
        return res.json(createdUser);
      
      })()
  }

};

