import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'delete':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.name !== action.payload
				),
			};
		case 'setBudget':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const State = {
	budget: 2000,
	expenses: [
		{name: 'Shopping', categorie: 'Shopping' , date : Date('2020-01-30')  , price: 50 },
	]
};

export const AppContext = createContext();



const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer,State);
	return (
		<AppContext.Provider
			value={{
                budget: state.budget,
				expenses: state.expenses,   
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;








