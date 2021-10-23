module.exports = function (req, res, next) {
  let formatted = req.path.replace(/\/+/g, "/");
  if (formatted !== "/" && formatted.endsWith("/")) formatted = formatted.slice(0, -1);
  if (req.path !== formatted) return res.redirect(formatted);
  next();
};