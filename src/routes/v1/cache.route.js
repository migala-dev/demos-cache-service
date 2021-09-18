const express = require('express');
const auth = require('../../shared/middlewares/auth');
const cacheController = require('../../controllers/cache.controller');

const router = express.Router();

router.get('/', auth(), cacheController.getAll);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: Cache
 */

/**
 * @swagger
 * /cache:
 *   post:
 *     summary: Get all the user cache
 *     tags: [Cache]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       "401":
 *         description: Invalid body information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Invalid body information
 */