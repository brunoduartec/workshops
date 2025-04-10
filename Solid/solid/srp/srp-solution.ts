interface User {
    name: string;
    email: string;
  }
  
  class UserService {
    constructor(
      private emailService: EmailService,
      private logService: LogService
    ) {}
  
    createUser(name: string, email: string): User {
      // Validação simples
      if (!email.includes("@")) {
        throw new Error("Email inválido");
      }
      
      // Criação do usuário
      const user: User = { name, email };
      console.log("Usuário criado:", user);
      
      // Utiliza os serviços dedicados
      this.emailService.sendWelcomeEmail(email);
      this.logService.log(`Usuário ${name} criado`);
      
      return user;
    }
  }
  
  class EmailService {
    sendWelcomeEmail(email: string) {
      console.log(`Enviando email de boas-vindas para ${email}`);
    }
  }
  
  class LogService {
    log(message: string) {
      console.log(`Log: ${message}`);
    }
  }
  
  // Uso
  const emailService = new EmailService();
  const logService = new LogService();
  const userService = new UserService(emailService, logService);
  
  userService.createUser("João", "joao@example.com");