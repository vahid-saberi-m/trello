import CONSTANTS from "./index";

export const addCard= (text,listId) => {
   return {
       type: CONSTANTS.ADD_CARD,
       payload:{text,listId}

   }
}