import { Food } from "../../types/food";

type FoodCategory = {
    id: string;
    image: any;
    color: string;
    name: string;
    items: Food[];
};

export const foodCategories: FoodCategory[] = [
    {
        id: "1", image: require("../../../assets/cereals.png"), color: "#FFCF00", name: "Cereais, pães e tubérculos", items: [
            { id: "1a", name: "Arroz", allergens: [{ id: "20", name: "Soja" }, { id: "11", name: "Glúten" }], imageURL: "https://static.itdg.com.br/images/1200-630/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg" },
            { id: "2a", name: "Trigo", allergens: [{ id: "11", name: "Glúten" }, { id: "20", name: "Soja" }, { id: "8", name: "Cevada" }, { id: "7", name: "Centeio" }, { id: "3", name: "Aveia" }], 
            imageURL:"" },
            { id: "3a", name: "Aveia", allergens: [{ id: "11", name: "Glúten" }, { id: "21", name: "Trigo" }, { id: "8", name: "Cevada" }, { id: "7", name: "Centeio" }] },
            { id: "4a", name: "Milho", allergens: [{ id: "20", name: "Soja" }] },
            { id: "5a", name: "Cevada", allergens: [{ id: "11", name: "Glúten" }, { id: "8", name: "Cevada" }] },
            { id: "6a", name: "Quinoa"},
            { id: "7a", name: "Centeio", allergens: [{ id: "11", name: "Glúten" }, { id: "7", name: "Centeio" }] },
            { id: "8a", name: "Pão de trigo integral", allergens: [{ id: "11", name: "Glúten" }, { id: "21", name: "Trigo" },] },
            // { id: "9a", name: "Pão branco", allergens: [{ id: "11", name: "Glúten" }, "trigo","leite",{ id: "20", name: "Soja" },"castanha do pará","castanha de caju","amendoim","centeio",{ id: "8", name: "Cevada" },"aveia","ovo"] },
        ]
    },
    // {
    //     id: "2", image: require("../../../assets/milk.png"), color: "#4FB6D0", name: "Leite e derivados", items: [
    //         { id: "1a", name: "Leite (vaca, cabra, ovelha)", allergens: ["Contém lactose", "Leite"] },
    //         { id: "2a", name: "Queijos", allergens: ["Contém lactose", "Leite"] },
    //         { id: "3a", name: "Creme azedo (sour cream)", allergens: ["Contém lactose", "Leite"] },
    //         { id: "4a", name: "Manteiga", allergens: ["Contém lactose", "Leite"] },
    //         { id: "5a", name: "Iogurte", allergens: ["Contém lactose", "Leite"] },
    //         { id: "6a", name: "Creme de leite", allergens: ["Contém lactose", "Leite"] },
    //         { id: "7a", name: "Leite condensado", allergens: ["Contém lactose", "Leite"] },
    //         { id: "8a", name: "Leite em pó", allergens: ["Contém lactose", "Leite"] },
    //         { id: "9a", name: "Sorvete", allergens: ["Contém lactose", "Leite"] },
    //         { id: "10a", name: "Coalhada", allergens: ["Contém lactose", "Leite"] },
    //         { id: "11a", name: "Requeijão", allergens: ["Contém lactose", "Leite"] },
    //         { id: "12a", name: "Nata", allergens: ["Contém lactose", "Leite"] },]
    // },
    // { id: "3", image: require("../../../assets/meat.png"), color: "#D7195D", name: "Carnes e ovos" },

    // {
    //     id: "4", image: require("../../../assets/fruits.png"), color: "#96CB24", name: "Frutas", items: [
    //         { id: "1a", name: "Laranja" },
    //         { id: "2a", name: "Limão" },
    //         { id: "3a", name: "Tangerina" },
    //         { id: "4a", name: "Acerola", allergens: ["látex natural"] },
    //         { id: "5a", name: "Pêssego", allergens: ["látex natural"] },
    //         { id: "6a", name: "Ameixa", allergens: ["látex natural"] },
    //         { id: "7a", name: "Cereja", allergens: ["látex natural"] },
    //         { id: "8a", name: "Abacaxi", allergens: ["látex natural"] },
    //         { id: "9a", name: "Banana", allergens: ["látex natural"] },
    //         { id: "10a", name: "Manga", allergens: ["látex natural"] },
    //         { id: "11a", name: "Mamão", allergens: ["látex natural"] },
    //         { id: "12a", name: "Maçã", allergens: ["látex natural"] },
    //         { id: "13a", name: "Coco" },
    //         { id: "14a", name: "Maracujá", allergens: ["látex natural"] },
    //         { id: "15a", name: "Kiwi", allergens: ["látex natural"] },
    //         { id: "16a", name: "Melão", allergens: ["látex natural"] },
    //         { id: "17a", name: "Melancia" },
    //         { id: "18a", name: "Uva", allergens: ["látex natural"] },
    //         { id: "19a", name: "Figo", allergens: ["látex natural"] },
    //         { id: "20a", name: "Abacate", allergens: ["látex natural"] },
    //         { id: "21a", name: "Lichia", allergens: ["látex natural"] },
    //     ]
    // },    
    // { id: "5",image: require("../../../assets/oils.png"), color: "#FFD670", name: "Óleos e gorduras", items:[
    //     { id: "1a", name: "Azeite de oliva" },
    //     { id: "2a", name: "Óleo de soja", allergens: [{ id: "20", name: "Soja" }] },
    //     { id: "3a", name: "Óleo de Canola", allergens: [{ id: "20", name: "Soja" }] },
    //     { id: "4a", name: "Óleo de girassol", allergens: [{ id: "20", name: "Soja" }] },
    //     { id: "5a", name: "Manteiga", allergens: ["Contém lactose", "Leite"] },
    //     { id: "6a", name: "Banha de porco"},
    //     { id: "7a", name: "Castanho do Pará", allergens: ["Castanho do Pará","látex natural"] },
    //     { id: "8a", name: "Castanhas de caju", allergens: ["Castanhas de caju","látex natural"] },
    //     { id: "9a", name: "Pistache", allergens: ["Pistache","látex natural"] },
           
    // ] },
    // { id: "6",image: require("../../../assets/candy.png"), color: "#513C2C", name: "Açúcares e doces" },
    // { id: "7",image: require("../../../assets/fruits.png"), color: "#00916E", name: "Verduras" },
    // { id: "8",image: require("../../../assets/fruits.png"), color: "#FF8964", name: "Leguminosas" },
];