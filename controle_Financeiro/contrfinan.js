let money = parseFloat(prompt("Qual a quantidade inicial de dinheiro? "));

let opcao = "";

do {
  opcao = prompt(
    "Quantidade inicial: R$ " +
      money +
      "\nEscolha uma opção:\n\n" +
      "1. Adicionar dinheiro\n" +
      "2. Remover dinheiro\n" +
      "3. Sair."
  );

  switch (opcao) {
    case "1":
      money += parseFloat(prompt("Quanto será adicionado? "));
      break;
    case "2":
      money -= parseFloat(prompt("Quanto  será subtraído? "));
      break;
    case "3":
      alert("Saindo...");
      alert("Encerrando o programa.");
      break;
    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
