const {
  createFeed,
  findAllFeed,
  findFeedByTitle,
  findFeedById,
  updateFeed,
  deleteFeed,
} = require('../controllers/feed.controllers');

const router = require('express').Router();

router.post('/feeds', createFeed);
router.get('/feeds', findAllFeed);
router.get('/feed', findFeedByTitle);
router.get('/feeds/:id', findFeedById);
router.put('/feeds/:id', updateFeed);
router.delete('/feeds/:id', deleteFeed);

module.exports = router;
