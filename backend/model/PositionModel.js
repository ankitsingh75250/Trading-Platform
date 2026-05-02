
const { model } = require("mongoose");
const { PositionsSchema } = require("../schema/PositionsSchema");

const PositionModel = model("position", PositionsSchema);

module.exports = { PositionModel };