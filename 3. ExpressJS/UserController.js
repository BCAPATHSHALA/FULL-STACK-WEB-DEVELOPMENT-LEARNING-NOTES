// Create Data
exports.registerUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPassword,
  });
};

// Read Data
exports.getuser = (req, res) => {
  res.json({
    name: "Manoj Nishad",
    email: "manojnishad@gmail.com",
    password: "12345",
  });
};

// Read Data
exports.getuserSame = (req, res) => {
    res.json({
      name: "Manoj Sharma",
      email: "manojsharma@gmail.com",
      password: "12345",
    });
  };