interface Notifier {
    send(email: string, message: string): void;
  }
  
  class EmailSender implements Notifier {
    send(email: string, message: string): void {
      console.log(`Enviando email para ${email}: ${message}`);
    }
  }
  
  class NotificationService {
    constructor(private notifier: Notifier) {}
  
    notify(email: string, message: string): void {
      this.notifier.send(email, message);
    }
  }
  
  // Uso
  const emailSender = new EmailSender();
  const notificationServiceRefactored = new NotificationService(emailSender);
  notificationServiceRefactored.notify("usuario@example.com", "Bem-vindo!");