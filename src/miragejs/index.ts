import { createServer } from "miragejs";

let coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    image: "assets/tradicional.png",
    price: 9.9,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    image: "assets/americano.png",
    price: 9.9,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    image: "assets/cremoso.png",
    price: 9.9,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", "gelado"],
    image: "assets/gelado.png",
    price: 9.9,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    image: "assets/cafecomleite.png",
    price: 9.9,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    image: "assets/latte.png",
    price: 9.9,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    image: "assets/capuccino.png",
    price: 9.9,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    image: "assets/macchiato.png",
    price: 9.9,
  },
  {
    id: 9,
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    image: "assets/mochaccino.png",
    price: 9.9,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    image: "assets/chocolatequente.png",
    price: 9.9,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcóolico", "gelado"],
    image: "assets/cubano.png",
    price: 9.9,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    image: "assets/havaiano.png",
    price: 9.9,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    image: "assets/arabe.png",
    price: 9.9,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcóolico"],
    image: "assets/irlandes.png",
    price: 9.9,
  },
];

createServer({
  routes() {
    this.urlPrefix = "http://localhost:5173";
    this.namespace = "api";

    // this.post("/coffees", (schema, request) => {
    //   let attrs = JSON.parse(request.requestBody);
    //   attrs.id = coffees.length + 1;
    //   coffees.push(attrs);

    //   return { coffee: attrs };
    // });

    this.get("/coffees", () => {
      return {
        coffees,
      };
    });
  },
});
