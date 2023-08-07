// module.exports = Urltable;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const urltableSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  // Taking User
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Urltable = mongoose.model("Urltable", urltableSchema);

module.exports = Urltable;
