import express from "express";
import { braintreePaymentController, braintreeTokenController } from "../controllers/paymentController.js";

const router = express.Router();

router.get('/braintree/token', braintreeTokenController);

router.post('/braintree/payment', braintreePaymentController);

export default router;