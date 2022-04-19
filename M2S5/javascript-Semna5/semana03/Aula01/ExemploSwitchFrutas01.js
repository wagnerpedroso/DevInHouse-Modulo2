var expr = prompt('Olá ! Qual fruta você gostaria de levar ?');

switch (expr) {
    case "Laranja":
      console.log("As laranjas custam $0.59 o quilo.");
      break;
    case "Maçã":
      console.log("Maçãs custam $0.32 o quilo.");
      break;
    case "Banana":
      console.log("Bananas custam $0.48 o quilo.");
      break;
    case "Cereja":
      console.log("Cerejas custam $3.00 o quilo.");
      break;
    case "Manga":
    case "Mamão":
      console.log("Mangas e mamões custam $2.79 o quilo.");
      break;
    default:
      console.log("Desculpe, estamos sem nenhuma " + expr + ".");
  }

  console.log("Tem algo mais que você gostaria de levar?");