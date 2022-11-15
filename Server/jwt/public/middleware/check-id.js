import Room from "../../models/roomModel";
const CheckId = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);
    if (room) {
      return next();
    }
    // res.status(400).json({
    //   success: false,
    //   message: `Id không tồn tại`,
    // });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Id không tồn tại",
    });
  }
};
export { CheckId };
