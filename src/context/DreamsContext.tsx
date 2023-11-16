import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { IDream } from "../models/dream";
import dreamsService from "../services/dreamsService";

interface IDreamContext {
  dreams: Array<IDream>;
  favorites: Array<IDream>;
  registerDream: (dream: Partial<IDream>) => void;
  updateDream: (dream: IDream) => void;
  toggleFavorite: (id: string) => void;
}

interface IDreamProviderProps {
  children: ReactNode;
}

export const DreamsContext = React.createContext<IDreamContext>({
  dreams: [],
  favorites: [],
  registerDream: (dream: Partial<IDream>) => {},
  updateDream: (dream: IDream) => {},
  toggleFavorite: (id: string) => {},
});

const DreamsProvider = ({ children }: IDreamProviderProps) => {
  const [dreams, setDreams] = useState<Array<IDream>>([]);
  const [favorites, setFavorites] = useState<Array<IDream>>([]);
  const contextValue = useMemo(
    () => ({ dreams, favorites, registerDream, updateDream, toggleFavorite }),
    [dreams, favorites]
  );

  useEffect(() => handleStoredValues(), []);
  useEffect(() => storeValues(), [dreams, favorites]);

  function handleStoredValues() {
    dreamsService.getDreams().then((res) => setDreams(res));
    dreamsService.getFavorites().then((res) => setFavorites(res));
  }

  function storeValues() {
    dreamsService.storeDreams(dreams);
    dreamsService.storeFavorites(favorites);
  }

  function registerDream(value: Partial<IDream>) {
    const dream: IDream = {
      id: Math.floor(Math.random() * 1000000).toString(),
      favorite: false,
      description: value.description ?? "",
      title: value.title ?? "",
    };

    setDreams([...dreams, dream]);
  }

  function updateDream(value: IDream) {
    const updatedDreams = dreams.map((dream) =>
      value.id === dream.id ? value : dream
    );
    setDreams(updatedDreams);
  }

  function toggleFavorite(id: string) {
    const updatedDreams = dreams.map((dream) => {
      if (dream.id === id) dream.favorite = !dream.favorite;
      return dream;
    });

    const favorites = updatedDreams.filter((dream) => dream.favorite);
    setDreams(updatedDreams);
    setFavorites(favorites);
  }

  return (
    <DreamsContext.Provider value={contextValue}>
      {children}
    </DreamsContext.Provider>
  );
};

export default DreamsProvider;
