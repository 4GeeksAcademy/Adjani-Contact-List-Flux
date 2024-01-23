const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			saludo: "Hola",
			contacts: [{
				Full_name: "Adjani Tirado",
				email: "nani@gmail.com"
			},
			{
				Full_name: "Paul Tirado",
				email: "paul@gmail.com"

			}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			eliminar: (indexDelete) => {
				console.log("Eliminar desde flux");
				const store = getStore();
				console.log(store.contacts);
				console.log(store.contacts.filter((item, index) => index != indexDelete))
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
