const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (email, password) => {
  //Verifica si el usuario ya existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error("El correo electrónico ya está registrado.");
    error.statusCode = 409;
    throw error;
  }

  const user = new User({ email, password });
  await user.save();
  return { message: "Usuario registrado exitosamente." };
};

exports.login = async (email, password) => {
    //Buscar al usuario por su email.
  const user = await User.findOne({ email });
  
    if (!user || !(await user.comparePassword(password))) {
      const error = new Error("Credenciales inválidas. Por favor, verifique su correo y contraseña.");
      error.statusCode = 401;
      throw error;
    }
  
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_KEY, { expiresIn: "3d" });
    return token;
};
