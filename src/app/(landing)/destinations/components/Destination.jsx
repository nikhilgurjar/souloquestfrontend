import { Box } from "@mui/material";
import React from "react";
import { Pagination } from "@mui/material";
import DestinationCard from "./card/DestinationCard";
import ExploreCard from "./card/ExploreCard";
import DestinationModel from '@/models/Destination.model'
import { connectMongoDB } from "@/lib/mongodb";
import DestinationClient from "./DestinationClient";

const getDestination = async () =>{
  await connectMongoDB();
  const destinations = await DestinationModel.find().limit(20).lean();
  return destinations;
}

const Destination = async () => {
  
  const destinations = await getDestination();

  return (
    <DestinationClient destinations={destinations}/>  
  );
};

export default Destination;
