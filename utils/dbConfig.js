const mongoose = require("mongoose");

const URL =
	"mongodb+srv://rehobothekene:ekene123@cluster0.qim9ebb.mongodb.net/revieDB?retryWrites=true&w=majority&appName=Cluster0";

const dbConfig = async () => {
	try {
		return await mongoose.connect(URL);
	} catch (error) {
		return error;
	}
};

module.exports = dbConfig;
