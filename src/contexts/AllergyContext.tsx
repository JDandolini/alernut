import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Allergy {
    id: string;
    name: string;
}

const AllergyContext = createContext(null!);

const ALLERGIES_KEY = "my-allergies";

export function AllergyProvider({ children }: { children: ReactNode }) {
    const [myAllergies, setMyAllergies] = useState([]);

    async function addAllergy(allergy: Allergy) {
        try {
            const updatedAllergies = [...myAllergies, allergy];

            await AsyncStorage.setItem(ALLERGIES_KEY, JSON.stringify(updatedAllergies));
            setMyAllergies(updatedAllergies);
        } catch (error) {

        }
    }

    async function removeAllergy(allergy: Allergy) {
        try {
            const filteredAllergies = myAllergies.filter(a => a.id !== allergy.id);            
            await AsyncStorage.setItem(ALLERGIES_KEY, JSON.stringify(filteredAllergies));
            setMyAllergies(filteredAllergies);
        } catch (error) {

        }

    }

    function hasAllergy(allergy: Allergy): boolean {
        return myAllergies.map(a => a.id).indexOf(allergy.id) !== -1;
    }

    function toggleAllergy(allergy: Allergy) {
        if (hasAllergy(allergy)) {
            removeAllergy(allergy);
        } else {
            addAllergy(allergy);
        }
    }

    async function getAllergies() {
        try {
            const value = await AsyncStorage.getItem(ALLERGIES_KEY);

            if (value !== null) {
                const myAllergies = JSON.parse(value);
                setMyAllergies(myAllergies);
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllergies();
    }, []);

    return <AllergyContext.Provider value={{ myAllergies, addAllergy, removeAllergy, hasAllergy, toggleAllergy }}>
        {children}
    </AllergyContext.Provider>
}

export const useAllergy = () => useContext(AllergyContext);