module.exports = (express) => {
  const router = express.Router();
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// GET all apps info
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/apps', (req, res) => {
    res.json([
      {
        id: 1,
        title: 'raid01',
        description: 'The Vault of Glass',
        releaseDate: '2012-08-04T16:52:49+00:00',
      },
      {
        id: 2,
        title: 'raid02',
        description: 'Crotas End',
        releaseDate: '2013-08-04T16:52:49+00:00',
      },
    ]);
  });
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// GET app by id#
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/apps/:id', (req, res) => {
    res.json({
      id: 1,
      title: 'raid01',
      description: 'The Vault of Glass',
      releaseDate: '2012-08-04T16:52:49+00:00',
    });
  });

  return router;
};
