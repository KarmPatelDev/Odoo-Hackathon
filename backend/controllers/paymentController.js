import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();


var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

const braintreeTokenController = async (req, res) => {

    try{
        
         gateway.clientToken.generate({}, function (error, response){
              if(error){
                   console.log(error);
                   res.status(500).send({
                        success: false,
                        message: "Error in Generate Token",
                        error: error,
                   });
              }
              else{
                   // Successfully Generate Token
                   res.status(201).send({
                        success: true,
                        message: "Generate Token Successful",
                        response: response,
                   });
              }
         });
    }
    catch(error){
         console.log(error);
         res.status(500).send({
              success: false,
              message: "Error in Generate Token",
              error: error,
         });
    }

};

const braintreePaymentController = async (req, res) => {

    try{
         const {price, nonce} = req.body;

         let newTransaction = gateway.transaction.sale(
              {
              amount: price,
              paymentMethodNonce: nonce,
              options: {
                   submitForSettlement: true,
              },
              },
              function (error, response){
                   if(response){
                        // Payment Successful
                        res.status(201).send({
                             success: true,
                             message: "Payment Successful",
                        });
                   }
                   else{
                        // Payment Error
                        console.log(error);
                        res.status(500).send({
                             success: false,
                             message: "Error in Payment",
                             error: error,
                        });
                   }
              }
         );
    }
    catch(error){
         console.log(error);
         res.status(500).send({
              success: false,
              message: 'Error in Payment',
              error: error,
         });
    }

};



export { braintreeTokenController, braintreePaymentController};
