const authModel = require("../model/auth");
const bcrypt = require("bcrypt");
const JWT=require('jsonwebtoken')

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.send({
        message: "Please enter the name!",
      });
    }
    if (!email) {
      return res.send({
        message: "Please enter the email!",
      });
    }
    if (!password) {
      return res.send({
        message: "Please enter the password!",
      });
    }

    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: true,
        message: "Email already registered!!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new authModel({ name, email, password: hashedPassword });
    await user.save();

    res.status(200).send({
      success: true,
      message: "Succesfully Register",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error occure in register",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Email and password required",
      });
    }

    const emailExist = await authModel.findOne({ email });
    if (!emailExist) {
      res.status(404).send({
        success: false,
        message: "Email not register",
      });
    }

    const match = await bcrypt.compare(password, emailExist.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid password",
      });
    }

    //token
    const token=await JWT.sign({_id:emailExist._id}, process.env.JWT_SECRET,{ 
      expiresIn:"7d"
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully avi!!",
      emailExist: { 
        _id:emailExist._id,
        name: emailExist.name,
        email:emailExist.email
      } ,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login controller",
    });
  }
};

module.exports = { registerController, loginController };
