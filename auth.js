export const authUser = (username, password, done) => {
  //Search the user, password in the DB to authenticate the user
  //Let's assume that a search within your DB returned the username and password match for "isaac".

  if (username !== "isaac" || password !== "1234") {
    return done(null, false, { message: "User not found" });
  }

  let authenticated_user = { id: 123, username: "isaac" };
  return done(null, authenticated_user);
};
