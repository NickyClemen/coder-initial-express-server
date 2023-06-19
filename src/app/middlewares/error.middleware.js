module.exports = (err, _req, res, _next) => {
  if (err.status && err.error_message) return res.status(err.status).json({ error_message: err.error_message });
  return res.status(500).json({ error_message: err.message });
};