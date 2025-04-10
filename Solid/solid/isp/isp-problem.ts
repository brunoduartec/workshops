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