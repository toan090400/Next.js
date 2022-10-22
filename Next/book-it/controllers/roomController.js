import Room from "../models/roomModel";

const allRoom = async (req, res) => {
  try {
    const room = await Room.find();
    res.status(200).json({
      success: true,
      message: "allRoom thành công",
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

const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    res.status(200).json({
      success: true,
      message: "getRoom thành công",
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const newRoom = async (req, res) => {
  try {
    // check room
    const room = await Room.findOne({ name: req.body.name });
    if (room) {
      return res.status(400).json({
        success: false,
        message: `${room.name} đã tồn tại`,
      });
    }
    // create new room
    const newRoom = await Room.create(req.body);
    res.status(200).json({
      success: true,
      message: "newRoom thành công",
      newRoom,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "updateRoom thành công",
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.query.id);
    res.status(200).json({
      success: true,
      message: "deleteRoom thành công",
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export { allRoom, newRoom, getRoom, updateRoom, deleteRoom };
