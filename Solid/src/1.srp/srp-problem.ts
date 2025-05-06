class UserServiceProblem {
    public createUser(name: string, email: string) {
      // Validação simples
      if (!email.includes("@")) {
        throw new Error("Email inválido");
      }
      
      // Criação do usuário
      const user = { name, email };
      console.log("Usuário criado:", user);
      
      // Envio de email de boas-vindas
      this.sendWelcomeEmail(email);
      
      // Registro em log
      this.logAction(`Usuário ${name} criado`);
    }
  
    private sendWelcomeEmail(email: string) {
      console.log(`Enviando email de boas-vindas para ${email}`);
    }
  
    private logAction(message: string) {
      console.log(`Log: ${message}`);
    }
  }
  
  // Uso
  const userServiceProblem = new UserServiceProblem();
  userServiceProblem.createUser("João", "joao@example.com");