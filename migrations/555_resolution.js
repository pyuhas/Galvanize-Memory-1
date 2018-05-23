exports.up = function(knex, Promise) {
    return knex.schema.createTable("resolutions", table => {
        table.increments("id");
        table.date("dueDate");
        table.string("resolution");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("resolutions");
};
