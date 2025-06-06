interface IWorkable {
    work(): void;
  }
  
  interface IEatable {
    eat(): void;
  }
  
  interface ISleepable {
    sleep(): void;
  }
  
  class HumanWorker implements IWorkable, IEatable, ISleepable {
    work(): void {
      console.log("Trabalhando...");
    }
    eat(): void {
      console.log("Comendo...");
    }
    sleep(): void {
      console.log("Dormindo...");
    }
  }
  
  class RobotWorker implements IWorkable {
    work(): void {
      console.log("Trabalhando...");
    }
  }
  
  // Uso

  console.log("Exemplo de uso: Human");
  const human: IWorkable & IEatable & ISleepable = new HumanWorker();
  human.work();
  human.eat();
  human.sleep();
  

  console.log("Exemplo de uso: Robô");
  const robot: IWorkable = new RobotWorker();
  robot.work();