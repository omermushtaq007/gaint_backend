const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { gtSettingValidation } = require('../../validations');
const { gtSettingController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .get(validate(gtSettingValidation.getGTSettingsBySettingTypes), gtSettingController.getGTSettingByType)
  .post(auth('manageOffer'), validate(gtSettingValidation.createGTSetting), gtSettingController.createGTSetting)
  .put(auth('manageOffer'), validate(gtSettingValidation.updateGTSetting), gtSettingController.updateGTSetting);

/**
 * @swagger
 * tags:
 *   name: GTSettings
 *   description: GTSettings management and retrieval
 */

/**
 * @swagger
 * /gt-settings/:
 *   get:
 *     summary: get GTSettings
 *     description: all can get GTSettings.
 *     tags: [GTSettings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - settingTypes
 *             properties:
 *               settingTypse:
 *                 type: string
 *             example:
 *               settingType: test name
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
