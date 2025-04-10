# S — Single Responsibility Principle (SRP)

Cada módulo ou classe deve ter apenas uma razão para mudar.

## Conceito
O SRP afirma que uma classe deve ter apenas uma responsabilidade, ou seja, deve haver apenas uma razão para ela mudar. Isso melhora a coesão e facilita a manutenção do código.

## Exemplo
```ts
// Violando o SRP
class Invoice {
  calculateTotal() { /*...*/ }
  printInvoice() { /*...*/ }
  saveToDatabase() { /*...*/ }
}

// Aplicando o SRP
class Invoice {
  calculateTotal() { /*...*/ }
}

class InvoicePrinter {
  print(invoice: Invoice) { /*...*/ }
}

class InvoiceRepository {
  save(invoice: Invoice) { /*...*/ }
}