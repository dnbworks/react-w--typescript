
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}



// useReducer



// import { useReducer } from 'react';

// import React from 'react';

// type Actions = 
//  | { type: 'add', payload: String } 
//  | { type: 'remove', payload: number }
//  | { type: 'done', payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch(action.type){
//     case: 'add':
//       return [];
//   }
// }
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return (
    
//   )
// }

// export default ReducerExample