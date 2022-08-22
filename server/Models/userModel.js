const mongoose = require("mongoose");

const userModel = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: string, required: true },
		profilePicture: {
			type: String,
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{ timestamps: true }
);

const Users = mongoose.model("Users", userModel);
module.exports = Users;
