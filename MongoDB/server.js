import connectDb from "./db.js";
import user from "./model/UserSchema.js"; 
import product from "./model/productSchema.js";

connectDb();

// ---------------- USER ----------------

const createUser = async (name, email, password, role) => {
  try {
    const newUser = await user.create({ name, email, password, role });
    console.log("User created:", newUser);
  } catch (error) {
    console.log("User not created", error);
  }
};

const readUser = async () => {
  const result = await user.find();
  console.log(result);
};

const updateUser = async () => {
  try {
    const result = await user.updateOne(
      { name: "Rahul" },
      { $set: { name: "ra" } }
    );
    console.log(result);
  } catch (error) {
    console.log("User not updated", error);
  }
};

const deleteUser = async (id) => {
  try {
    const result = await user.findByIdAndDelete(id);
    console.log(`Deleted user ${result}`);
  } catch (error) {
    console.log("User can't be deleted", error);
  }
};

// ---------------- PRODUCT ----------------

const createProduct = async () => {
  try {
    const newProduct = await product.create({
      name: "Monitor 8k",
      category: "Accessories",
      price: 40,
      userid: "69bb740bf3d09dfb326620e2",
      stock: 12,
      specs: { size: 32 },
      tags: ["display"],
    });

    console.log("Product created:", newProduct);
  } catch (error) {
    console.log(error);
  }
};

// COUNT PRODUCTS
const productCount = async () => {
  const result = await product.aggregate([
    { $match: { category: "Accessories" } },
    { $count: "total_count" },
  ]);

  console.log(result);
};

createProduct();
productCount();


//high value filters
const highValue=async()=>{
    const result=await product.aggregate([
        { $match: { price: { $gt: 1000 } } },
        {$sort:{price:-1}},
        {$limit:5},
        {$project:{_id:0,name:1,price:1}}
    ]);
    console.log(result);
};
highValue();

