export const foodCategories = [
    {
        id: "1", image: require("../../../assets/cereals.png"), color: "#FFCF00", name: "Cereais, pães e tubérculos", items: [
            { id: "1a", name: "Arroz", allergens: ["soja", "glúten"], imageURL: "" },
            { id: "2a", name: "Trigo", allergens: ["glúten", "soja", "cevada", "centeio", "aveia"] },
            { id: "3a", name: "Aveia", allergens: ["glúten", "trigo", "cevada", "centeio"] },
            { id: "4a", name: "Milho", allergens: ["soja", "girassol"] },
        ]
    },
    {
        id: "2", image: require("../../../assets/milk.png"), color: "#4FB6D0", name: "Leite e derivados", items: [
            { id: "1a", name: "Leite (vaca, cabra, ovelha)", allergens: ["Leite", "lactose"] },
            { id: "2a", name: "Queijos", allergens: ["Leite", "lactose"] },
            { id: "3a", name: "Creme azedo (sour cream)", allergens: ["Leite", "lactose"] },
            { id: "4a", name: "Manteiga", allergens: ["Leite", "lactose"] },
            { id: "5a", name: "Iogurte", allergens: ["Leite", "lactose"] },
            { id: "6a", name: "Creme de leite", allergens: ["Leite", "lactose"] },
            { id: "7a", name: "Leite condensado", allergens: ["Leite", "lactose"] },
            { id: "8a", name: "Leite em pó", allergens: ["Leite", "lactose"] },
            { id: "9a", name: "Sorvete", allergens: ["Leite", "lactose"] },
            { id: "10a", name: "Coalhada", allergens: ["Leite", "lactose"] },
            { id: "11a", name: "Requeijão", allergens: ["Leite", "lactose"] },
            { id: "12a", name: "Nata", allergens: ["Leite", "lactose"] },]
    },
    { id: "3", image: require("../../../assets/meat.png"), color: "#D7195D", name: "Carnes e ovos" },

    {
        id: "4", image: require("../../../assets/fruits.png"), color: "#96CB24", name: "Frutas", items: [
            { id: "1a", name: "Laranja" },
            { id: "2a", name: "Limão" },
            { id: "3a", name: "Tangerina" },
            { id: "4a", name: "Acerola", allergens: ["látex natural"] },
            { id: "5a", name: "Pêssego", allergens: ["látex natural"] },
            { id: "6a", name: "Ameixa", allergens: ["látex natural"] },
            { id: "7a", name: "Cereja", allergens: ["látex natural"] },
            { id: "8a", name: "Abacaxi", allergens: ["látex natural"] },
            { id: "9a", name: "Banana", allergens: ["látex natural"] },
            { id: "10a", name: "Manga", allergens: ["látex natural"] },
            { id: "11a", name: "Mamão", allergens: ["látex natural"] },
            { id: "12a", name: "Maçã", allergens: ["látex natural"] },
            { id: "13a", name: "Coco" },
            { id: "14a", name: "Maracujá", allergens: ["látex natural"] },
            { id: "15a", name: "Kiwi", allergens: ["látex natural"] },
            { id: "16a", name: "Melão", allergens: ["látex natural"] },
            { id: "17a", name: "Melancia" },
            { id: "18a", name: "Uva", allergens: ["látex natural"] },
            { id: "19a", name: "Figo", allergens: ["látex natural"] },
            { id: "20a", name: "Abacate", allergens: ["látex natural"] },
            { id: "21a", name: "Lichia", allergens: ["látex natural"] },
        ]
    },    
    { id: "5",image: require("../../../assets/oils.png"), color: "#FFD670", name: "Óleos e gorduras" },
    { id: "6",image: require("../../../assets/candy.png"), color: "#513C2C", name: "Açúcares e doces" },
    { id: "7",image: require("../../../assets/fruits.png"), color: "#00916E", name: "Verduras" },
    { id: "8",image: require("../../../assets/fruits.png"), color: "#FF8964", name: "Leguminosas" },
];