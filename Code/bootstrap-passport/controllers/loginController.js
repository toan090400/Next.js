const allLogin = async (req, res) => {
  try {
    const data = JSON.parse(req.cookies.token);
    res.status(200).json({
      success: true,
      message: "Login thành công",
      user: data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Login thất bại.",
    });
  }
};

export { allLogin };
