class PaymentProcessorProblem {
    processPayment(type: string, amount: number) {
      if (type === 'credit') {
        console.log(`Processing credit card payment of $${amount}`);
      } else if (type === 'paypal') {
        console.log(`Processing PayPal payment of $${amount}`);
      } else {
        throw new Error('Payment type not supported');
      }
    }
  }
  
  // Uso
  const paymentProcessorProblem = new PaymentProcessorProblem();
  paymentProcessorProblem.processPayment('credit', 100);





