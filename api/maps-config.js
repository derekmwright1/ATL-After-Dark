module.exports = function handler(_request, response) {
  const key = process.env.GOOGLE_MAPS_BROWSER_KEY;
  const mapId = process.env.GOOGLE_MAPS_MAP_ID;
  response.setHeader("Cache-Control", "no-store");

  if (!key || !mapId) {
    return response.status(503).json({ error: "Map configuration unavailable" });
  }

  return response.status(200).json({ key, mapId });
};
