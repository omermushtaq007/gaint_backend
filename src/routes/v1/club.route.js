const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const clubValidation = require('../../validations/club.validation');
const clubController = require('../../controllers/club.controller');

const router = express.Router();

router.route('/').post(auth('manageClub'), validate(clubValidation.createClub), clubController.createClub);

router
  .route('/:clubId')
  .get(validate(clubValidation.getClub), clubController.getClub)
  .patch(auth('manageClub'), validate(clubValidation.updateClub), clubController.updateClub)
  .delete(auth('manageClub'), validate(clubValidation.deleteClub), clubController.deleteClub);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Clubs
 *   description: Club management and retrieval
 */

/**
 * @swagger
 * /clubs:
 *   post:
 *     summary: Create a club
 *     description: Only admins can create clubs.
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clubName
 *             properties:
 *               clubName:
 *                 type: string
 *               about:
 *                 type: string
 *               profile:
 *                 type: object
 *               members:
 *                  type: array
 *             example:
 *               clubName: test name
 *               about: test@example.com
 *               profile: {}
 *               members: []
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Club'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */

/**
 * @swagger
 * /clubs/{id}:
 *   get:
 *     summary: Get a club
 *     description: Logged in users can fetch only their own club information. Only admins can fetch other clubs.
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Club id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Club'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a club
 *     description: Logged in users can only update their own club information. Only admins can update other clubs.
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Club id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clubName
 *             properties:
 *               clubName:
 *                 type: string
 *               about:
 *                 type: string
 *               profile:
 *                 type: object
 *               members:
 *                  type: array
 *             example:
 *               clubName: test name
 *               about: test about
 *               profile: {}
 *               members: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Club'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a club
 *     description: Only admins can delete clubs.
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Club id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
