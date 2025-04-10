class EmailSenderProblem {
    send(email: string, message: string): void {
      console.log(`Enviando email para ${email}: ${message}`);
    }
  }
  
  class NotificationServiceProblem {
    private emailSender = new EmailSenderProblem();
  
    notify(email: string, message: string): void {
      this.emailSender.send(email, message);
    }
  }
  
  // Uso
  const notificationService = new NotificationServiceProblem();
  notificationService.notify("usuario@example.com", "Bem-vindo!");