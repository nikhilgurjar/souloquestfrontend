import React from "react";
import DestinationModel from '@/models/Destination.model'
import { connectMongoDB } from "@/lib/mongodb";
import DestinationClient from "./DestinationClient";

const getDestination = async () =>{
  await connectMongoDB();
  const destinations = await DestinationModel.find().limit(10).lean();
  return destinations;
}

const Destination = async () => {
  
  const destinations = await getDestination();

  return (
    <DestinationClient destinations={destinations}/>  
  );
};

export default Destination;
