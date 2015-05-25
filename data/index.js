(function(data){

    var seedData = require('./seedData');

    data.getNoteCategories = function (next){
        // stub out with seed data
        next(null, seedData.initialNotes);
    };

})(module.exports);