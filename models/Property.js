import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    number: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Property = models.Property || model("Property", PropertySchema);

export default Property;
