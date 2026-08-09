import express from 'express';
import { isAuthenticated } from '../middleware/auth.js';
import upload from '../config/cloudinary.js';
import {
   createPost,
   getFeedPosts,
   getPost,
   updatePost,
   deletePost,
   toggleLike,
   addComment,
   deleteComment,
   getUserPosts,
   searchUsersForMention
} from '../controllers/postController.js';

const router = express.Router();

// All routes are protected
router.use(isAuthenticated);

// Post CRUD
router.post('/', upload.array('media', 10), createPost);
router.get('/feed', getFeedPosts);
router.get('/search-users', searchUsersForMention);
router.get('/user/:userId', getUserPosts);
router.get('/:postId', getPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

// Likes
router.post('/:postId/like', toggleLike);

// Comments
router.post('/:postId/comments', addComment);
router.delete('/:postId/comments/:commentId', deleteComment);

export default router;
