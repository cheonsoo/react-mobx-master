/* eslint-disable  */
const getUserId = req => {
  if (req.headers["x-authenticated-userid"]) {
    const userInfo = decodeURIComponent(
      req.headers["x-authenticated-userid"]
    ).split("/");
    console.log(`[${new Date()}] Authorized User [${userInfo[0]}]`);
    return userInfo[0];
  }
  throw Error("Do not have UserInfo!");
};

export const apiSecure = (req, res, next) => {
  console.log(`Requested URL: ${req.hostname}${req.originalUrl}`);

  // Dev Setup
  if (process.env.NODE_ENV === "development") {
    return next();
  }

  try {
    getUserId(req);
    return next();
  } catch (e) {
    console.log(e.message);
    res.send({
      status: 401,
      msg: "unauthorized",
      date_requested: new Date()
    });
  }
};

export function login(req, res) {
  res.send({
    status: 200,
    msg: "login success",
    data: {
      userid: "cs.park",
      username: "박천수"
    }
  });
}
