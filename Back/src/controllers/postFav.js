const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { idUser } = req.query;
  const { id, name, species, gender, image } = req.body;
  try {
    if (!id || !name || !species || !gender || !image)
      res.status(401).json({ message: "ERROR: Faltan datos." });
    const [fav, created] = await Favorite.findOrCreate({
      where: {
        id,
        name,
        species,
        gender,
        // status,
        // origin,
        image,
      },
    });
    fav.addUser(idUser);
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postFav };
