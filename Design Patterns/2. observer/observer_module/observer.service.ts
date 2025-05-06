/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConcreteSubject } from './subject';
import { ConcreteObserverA } from './concrete-observerA';
import { ConcreteObserverB } from './concrete-observerB';
import { ObserverData } from './observer.interface';

@Injectable()
export class ObserverService {
  private subject = new ConcreteSubject();

  constructor() {
    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();

    this.subject.attach(observerA);
    this.subject.attach(observerB);
  }

  triggerEvent(event: ObserverData): void {
    this.subject.notify(event);
  }
}
