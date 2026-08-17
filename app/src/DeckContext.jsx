import { createContext, useContext } from 'react';

export const DeckContext = createContext(null);

export function useDeck() {
  return useContext(DeckContext);
}
