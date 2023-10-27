import express, { urlencoded } from "express";
const app = express();

import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { authUser } from "./auth.js";

app.use(urlencoded({ extended: false }));

//Middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.session()); //allow passport to use "express-session"

passport.use(new LocalStrategy(authUser));

passport.serializeUser((userObj, done) => {
  done(null, userObj);
});

passport.deserializeUser((userObj, done) => {
  done(null, userObj);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

//we check if not authenticated and redirect to login page
const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
};

app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard.ejs", { username: req.user.username });
});

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
};

app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

app.get("/login", checkLoggedIn, (req, res) => {
  res.render("login.ejs");
});

app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
  console.log(`-------> User Logged out`);
});

app.listen(3001, () => console.log(`Server started on port 3001...`));
