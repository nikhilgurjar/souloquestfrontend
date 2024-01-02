"use server";

import { connectMongoDB } from "@/lib/mongodb";
import DestinationModel from "@/models/Destination.model";
import React from "react";

const AutoComplete = async (query) => {
  try {
    await connectMongoDB();
    const suggestions = await DestinationModel.find({
      name: { $regex: new RegExp(query, "i") },
    });
    const nameValue = suggestions.map((item) => item.name);
    console.log(nameValue);
    return nameValue
  } catch (e) {
    console.log("error in autocompletion :: ", e);
  }
};

export default AutoComplete;
