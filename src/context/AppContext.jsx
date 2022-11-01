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
	budget: 0,
	expenses: [
		{name:"Food",categorie:"Alimentation",date:"2022-01-30",price:500},
		{name:"Gym",categorie:"Sport",date:"2022-11-01",price:250},
		{name:"Dinner",categorie:"Restauration",date:"2022-12-22",price:100},
		{name:"Haircut",categorie:"Hairdressing",date:"2022-10-27",price:50}
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








