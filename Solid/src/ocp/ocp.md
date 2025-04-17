# O — Open/Closed Principle (OCP)

Entidades devem estar abertas para extensão, mas fechadas para modificação.

## Conceito
Você deve ser capaz de adicionar novos comportamentos ao sistema sem alterar o código existente, evitando efeitos colaterais e bugs.

## Exemplo
```ts
// Violando o OCP
class Discount {
  calculate(price: number, type: string) {
    if (type === 'regular') return price;
    if (type === 'vip') return price * 0.8;
    if (type === 'premium') return price * 0.5;
  }
}

// Aplicando o OCP
interface DiscountStrategy {
  calculate(price: number): number;
}

class RegularDiscount implements DiscountStrategy {
  calculate(price: number) {
    return price;
  }
}

class VipDiscount implements DiscountStrategy {
  calculate(price: number) {
    return price * 0.8;
  }
}

class DiscountService {
  constructor(private strategy: DiscountStrategy) {}

  calculate(price: number) {
    return this.strategy.calculate(price);
  }
}