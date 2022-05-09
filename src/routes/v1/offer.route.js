const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const offerValidation = require('../../validations/offer.validation');
const offerController = require('../../controllers/offer.controller');

const router = express.Router();

router.route('/make').post(auth('manageOffer'), validate(offerValidation.makeAnOffer), offerController.createOffer);

router
  .route('action/:offerId/:action')
  .post(auth('manageOffer'), validate(offerValidation.offerAction), offerController.getOffer);

router.route('/:offerId').patch(auth('manageOffer'), validate(offerValidation.updateOffer), offerController.updateAnOffer);

router.route('chat/:offerId').post(auth('manageOffer'), validate(offerValidation.chatOnOffer), offerController.getOffer);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Offers
 *   description: Offer management and retrieval
 */

/**
 * @swagger
 * /offers/make:
 *   post:
 *     summary: Create a offer
 *     description: Only admins can create offers.
 *     tags: [Offers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clubId
 *               - playerId
 *               - offerAmount
 *             properties:
 *               clubId:
 *                 type: string
 *               playerId:
 *                 type: string
 *               offerName:
 *                 type: string
 *               offerAmount:
 *                 type: number
 *             example:
 *               offerName: test name
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Offer'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */

/**
 * @swagger
 * /offers/{id}:
 *   get:
 *     summary: Get a offer
 *     description: Logged in users can fetch only their own offer information. Only admins can fetch other offers.
 *     tags: [Offers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Offer id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Offer'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a offer
 *     description: Logged in users can only update their own offer information. Only admins can update other offers.
 *     tags: [Offers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Offer id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - offerName
 *             properties:
 *               offerName:
 *                 type: string
 *               about:
 *                 type: string
 *               profile:
 *                 type: object
 *               members:
 *                  type: array
 *             example:
 *               offerName: test name
 *               about: test about
 *               profile: {}
 *               members: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Offer'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a offer
 *     description: Only admins can delete offers.
 *     tags: [Offers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Offer id
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
