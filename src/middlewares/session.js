import cookieSession from "cookie-session";

export const initSession = ((cookieSession({
    secret: 'user_secret_session'
})));

export const userIsLogged = ((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    return next();
  });

export const adminIsLogged = ((req, res, next) => {
    res.locals.isLoggedAdmin = req.session.isLoggedAdmin;
    return next();
});