const db = require('./db');
const util = require('../../lib/util');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports add function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.add = (payload, err, success) => {
  db.character.create(payload).then(success).catch(err);
  util.debug('Character ' + 'Added '.create + 'in Models - ', payload);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports all function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.all = (err, success) => {
  db.character.findAll().then(success).catch(err);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports one function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.one = (payload, err, success) => {
  db.character.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('Character being ' + 'Searched '.read + 'in Models - ', payload);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports update function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.update = (payload, err, success) => {
  db.character.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('Character being ' + 'Updated '.update + 'in Models - ', payload);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports remove function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.remove = (payload, err, success) => {
  db.character.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('Character being ' + 'Removed '.delete + 'from Models - ', payload);
};
