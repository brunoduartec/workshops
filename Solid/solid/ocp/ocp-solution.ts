interface PaymentMethod {
    process(amount: number): void;
  }
  
  class CreditCardPayment implements PaymentMethod {
    process(amount: number): void {
      console.log(`Processing credit card payment of $${amount}`);
    }
  }
  
  class PayPalPayment implements PaymentMethod {
    process(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
  
  class PaymentProcessor {
    processPayment(paymentMethod: PaymentMethod, amount: number): void {
      paymentMethod.process(amount);
    }
  }
  
  // Uso
  const creditPayment = new CreditCardPayment();
  const paypalPayment = new PayPalPayment();
  const paymentProcessorRefactored = new PaymentProcessor();
  
  paymentProcessorRefactored.processPayment(creditPayment, 100);
  paymentProcessorRefactored.processPayment(paypalPayment, 200);