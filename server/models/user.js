

//mongodb+srv://sanyagoyal-mongo:<password>@cluster0.6yzau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	userName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        discord: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        postalCode: { type: String, required: true },
        about: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
        userName: Joi.string().required().label("User Name"),
        email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
        discord: Joi.string().required().label("Discord"),
        address: Joi.string().required().label("Address"),
        city: Joi.string().required().label("City"),
        country: Joi.string().required().label("Country"),
        postalCode: Joi.string().required().label("Postal Code"),
        about: Joi.string().required().label("About"),
		
	});
	return schema.validate(data);
};

module.exports = { User, validate };