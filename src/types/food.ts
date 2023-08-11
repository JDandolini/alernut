import { Allergy } from "../contexts/AllergyContext";

export type Food = {
    id: string;
    imageURL?: string;
    name: string;
    allergens?: Allergy[];
};