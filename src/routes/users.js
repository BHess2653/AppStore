module.exports = (express) => {
  const router = express.Router();
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// GET all users info
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'GM Dahaka',
      },
      {
        id: 2,
        name: 'theclaw124',
      },
    ]);
  });
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// GET user by id#
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/users/:id', (req, res) => {
    res.json({
      id: 1,
      name: 'GM Dahaka',
    });
  });

  return router;
};
