import Room from "../models/roomModel";

const Search = async (req, res) => {
  try {
    const room = await Room.find({
      $or: [
        {
          name: { $regex: req.query.search },
        },
        // {
        //   status: { $regex: req.query.search },
        // },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Search",
      count: room.length,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const Pagation = async (req, res) => {
  try {
    const page_size = 4; // 1 trang hiện bao nhiêu sản phẩm
    const page = parseInt(req.query.page || "1");
    const total_item = await Room.countDocuments(); // đếm xem có bao nhiêu item hiện có
    const page_total = Math.ceil(total_item / page_size); // đếm xem mình sẽ có bao nhiêu trang
    const rooms = await Room.find()
      .limit(page_size)
      .skip(page_size * (page - 1));
    res.status(200).json({
      success: true,
      message: "Pagation",
      total_item,
      page_total,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export { Search, Pagation };
