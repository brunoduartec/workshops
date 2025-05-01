interface IWorkerProblem {
    work(): void;
    eat(): void;
    sleep(): void;
  }
  
  class HumanWorkerProblem implements IWorkerProblem {
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
  
  class RobotWorkerProblem implements IWorkerProblem {
    work(): void {
      console.log("Trabalhando...");
    }
    eat(): void {
      // Robô não come
      throw new Error("Robôs não comem");
    }
    sleep(): void {
      // Robô não dorme
      throw new Error("Robôs não dormem");
    }
  }


  const humanWorker = new HumanWorkerProblem();
  humanWorker.work(); // Trabalhando...
  humanWorker.eat(); // Comendo...
  humanWorker.sleep(); // Dormindo...

  const robotWorker = new RobotWorkerProblem();
  robotWorker.work(); // Trabalhando...
  try {
    robotWorker.eat(); // Erro: Robôs não comem
  }
  catch (error: any) {
    console.error(error.message);
  }
  try {
    robotWorker.sleep(); // Erro: Robôs não dormem
  }
  catch (error: any) {
    console.error(error.message);
  }
