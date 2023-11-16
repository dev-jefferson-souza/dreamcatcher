import React, { ReactNode, useMemo, useState } from "react";
import { IDream } from "../models/dream";

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

  function registerDream(dream: Partial<IDream>) {
    const newDream: IDream = {
      id: Math.floor(Math.random() * 1000000).toString(),
      favorite: false,
      description: dream.description ?? "",
      title: dream.title ?? "",
    };

    setDreams([...dreams, newDream]);
  }

  function updateDream(updatedDream: IDream) {
    const updatedDreams = dreams.map((dream) =>
      dream.id === updatedDream.id ? updatedDream : dream
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
