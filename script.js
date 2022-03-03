const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("connected");
  },
  err => {
    console.log(err);
  }
);

run();
async function run() {
  try {
    const user1 = await User.create({
      name: "Alex",
      age: 26,
      email: "TEST@test.com",
      hobbies: ["Weight Lifting", "Bowling"],
      address: {
        street: "Main St",
      },
    });
    //   const user = new User({ name: "Alex", age: 25 });
    //   user.save();
    console.log(user1);
    user1.sayHi();

    const user2 = await User.findOne({ name: "Alex", email: "TEST@test.com" });
    console.log(user2);
    console.log(user2.namedEmail);

    await user2.save();
  } catch (err) {
    console.log(err.message);
  }
}
