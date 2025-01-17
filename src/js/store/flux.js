const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			current_contact: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/contactos_adjani`)
					.then((response) => response.json())
					.then(data => setStore({ contacts: data }))
					.then((data) => {
						console.log(data)
						id==false ? setStore({contacts:data}) : setStore({current_contact:data})			
					})
			},
			
			crear: (contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
			},

			eliminar: (indexDelete) => {
				const store = getStore();
				console.log(store.contacts.filter((item, index) => index != indexDelete))
				setStore({ contacts: store.contacts.filter((item, index) => index != indexDelete) })

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexDelete, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.then(() => {
						fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/contactos_adjani`)
							.then((response) => response.json())
							.then(data => setStore({ contacts: data }))
					})
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
			},
		}
	};
};

export default getState;
