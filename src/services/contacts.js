// Contacts Service

export default {
	async getData() {
		try {
			const response = await fetch("/contacts.json");
			return await response.json();
		} catch (error) {
			throw new Error("Oops! Contacts are not available");
		}
	}
};
