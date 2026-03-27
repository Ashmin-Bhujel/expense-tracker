import environment from "@/environment.js";
import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(environment.MONGODB_URI, {
    dbName: environment.MONGODB_DBNAME,
  });

  // * Globally transform the return value of toJSON and toObject to replace _id with id and remove __v
  mongoose.set("toJSON", {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform: (_doc, { _id, __v, ...rest }) => {
      const transformedObject = { id: _id, ...rest };
      return transformedObject;
    },
  });

  mongoose.set("toObject", {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform: (_doc, { _id, __v, ...rest }) => {
      const transformedObject = { id: _id, ...rest };
      return transformedObject;
    },
  });
}
