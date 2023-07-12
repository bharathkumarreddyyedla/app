import Favourite from "../models/favourites.js";
import User from "../models/user.js";

export const saveToFavourite = async (req, res) => {
  try {
    const { userId, favouritePlants } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newFavourite = new Favourite({
      userId,
      favouritePlants,
    });
    const result = await newFavourite.save();
    res.status(200).json({ message: "You have added to favourites" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getFavouritePlants = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const favouritePlants = await Favourite.find({ userId: id });
  res.status(200).json(favouritePlants);
};
