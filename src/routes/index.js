module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Routes
  router.use('/api/v1/', require('./users')(express));
  router.use('/api/v1/', require('./characters')(express));

  return router;
};
