const { Feed } = require('../database/models/feed.models');

exports.createFeed = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const feed = await Feed.create({
      title,
      body,
    });

    return res.status(201).json({
      message: 'success create feed',
      code: 201,
      feed,
    });
  } catch (error) {
    next(error);
  }
};

exports.findAllFeed = async (req, res, next) => {
  try {
    const feeds = await Feed.find();
    return res.status(200).json({
      message: 'success find feed',
      code: 200,
      feeds,
    });
  } catch (error) {
    next(error);
  }
};

exports.findFeedByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    const feed = await Feed.findOne({ title });

    if (!feed) {
      throw new Error('feed not found');
    }

    return res.status(200).json({
      message: 'success find feed title',
      code: 200,
      feed,
    });
  } catch (error) {
    next(error);
  }
};

exports.findFeedById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);

    if (!feed) {
      throw new Error('feed not found');
    }

    return res.status(200).json({
      message: 'success find feed',
      code: 200,
      feed,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateFeed = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    const feed = await Feed.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );

    return res.status(201).json({
      message: 'success update feed',
      code: 201,
      feed,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFeed = async (req, res, next) => {
  try {
    const { id } = req.params;

    const feed = await Feed.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'success delete feed',
      code: 200,
      feed,
    });
  } catch (error) {
    next(error);
  }
};
