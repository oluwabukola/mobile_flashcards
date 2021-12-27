import { getAllDecks } from "./index";
import {
    removeDeck,
    addCardToDeck,
    getDecks,
    saveDeckTitle
  } from "../utils/helpers";
  
  export const InitialData = () => {
    return (dispatch) => {
      return getDecks().then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  export const AddQuestionToDeck = (title, card) => {
    return (dispatch) => {
      return addCardToDeck(title, card).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  // export const handleAddQuestionToDeck = {
  //   type: 'ADD_CARD', 
  //   payload: {
  //     question, answer, title
  //   }
  // };

  export const CreateNewDeck = (title) => {
    return (dispatch) => {
      return saveDeckTitle(title).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  export const DeleteDeck = (key) => {
    return (dispatch) => {
      return removeDeck(key).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };
  