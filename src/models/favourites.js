import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  favouritePlants: {
    type: Array,
    required: false,
    default: [],
  },
});

const Favourite = mongoose.model("favouriteSchema", favouriteSchema);

export default Favourite;
