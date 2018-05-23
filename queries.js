const knex = require("./database-connection");

module.exports = {
    list(){
        return knex("resolutions")
        .select();
    },
    read(id){
        return knex("resolutions")
        .select()
        .where("id", id)
        .first();
    },
    create(resolution){
        return knex("resolutions")
            .insert(resolution)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, resolution){
        return knex("resolutions")
            .update(resolution)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return knex("resolutions")
        .delete()
        .where("id", id)
        .returning("*")
        .then(record => record[0]);
    }
};
