import express from "express";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import { configDotenv } from "dotenv";

const app = express();

app.use(express.urlencoded({ extended: false }));

configDotenv();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());

const authenticateUser = (username, password, done) => {
  const user = { id: "123", username: "user1" };

  return done(null, user);
};

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
};

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }

  next();
};

passport.use(new LocalStrategy(authenticateUser));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = { id: "123", username: "user1" };

  done(null, user);
});

app.get("/", checkAuthenticated, (req, res) => {
  res.status(200).send("Welcome home!");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/login", checkLoggedIn, (req, res) => {
  res.status(200).send("Login page");
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
  console.log("User logged out.");
});

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});
