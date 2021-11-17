'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('kontaks', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 50
    },
    email: {
      type: 'string',
      length: 50
    },
    no_handphone: {
      type: 'string',
      length: 20
    },
    createdAt: {
      type: 'date'
    },
    updatedAt: {
      type: 'date'
    }
  }, function (err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('kontaks', callback);
};

exports._meta = {
  "version": 1
};
