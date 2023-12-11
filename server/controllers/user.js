const User = require('../schemas/User');

const bcrypt = require('bcrypt');

//sign up
exports.signup = async (req, res) => {
    
    try {
        const userObj = {
            name: req.body.name,
            email: req.body.email,
            encryptedPassword: req.body.password
        };
        
        // Check if the user already exists
        const userResponse = await User.findOne({email: userObj.email});

        console.log("A")
    
        if (userResponse) {
            return res.status(409).json("User already exists");
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(userObj.encryptedPassword, 10);
    
        userObj.encryptedPassword = hashedPassword;
    
        // Create the user with the hashed password
        console.log("B")
        const newUser = await User.create(userObj);
        console.log("C")
        
        // Remove password from the response
        const { encryptedPassword, ...userWithoutPassword } = newUser.toObject();
    
        res.status(200).json({
            message: "User Created Successfully",
            user: userWithoutPassword
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
}


//login
exports.login = async (req, res) => {
    try {
        //check if user exists
        const userResponse = await User.findOne({email: req.body.email})

        if (!userResponse) {
            return res.status(404).json("User does not exists");
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userResponse.encryptedPassword);

        if (!passwordMatch) {
            return res.status(401).json("Incorrect password"); // Unauthorized
        }

        const { encryptedPassword, ...userWithoutPassword } = userResponse.toObject();

        res.status(200).json({
            message: "Login successful",
            user: userWithoutPassword
        });

    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

exports.forgetPassword = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
    
}

//microsoft Oauth
exports.msAuth = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}
exports.msAuthCallback = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

//Google Oauth
exports.googleAuth = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

//Apple Oauth
exports.appleAuth = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

