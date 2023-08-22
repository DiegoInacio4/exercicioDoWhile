let opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo\n" +
      "Escolha uma opção:\n\n" +
      "1. Feijão\n" +
      "2. Arroz\n" +
      "3. Batata\n" +
      "4. Cuscuz\n" +
      "5. Encerrar\n"
  );

  switch (opcao) {
    case "1":
      alert("Vocẽ escolheu o Feijão!");
      break;
    case "2":
      alert("Vocẽ escolheu o Arroz!");
      break;
    case "3":
      alert("Vocẽ escolheu a Batata!");
      break;
    case "4":
      alert("Vocẽ escolheu o Cuscuz!");
      break;
    case "5":
      alert("Vocẽ escolheu encerrar!");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "5");
