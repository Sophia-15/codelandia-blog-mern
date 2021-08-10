const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/all', postController.allPosts);
router.post('/create', express.json(), postController.addPost);

module.exports = router;
