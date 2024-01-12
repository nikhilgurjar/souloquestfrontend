import Destinations from "@/models/Destination.model";
import Destination from "./components/Destination";
import { connectMongoDB } from "@/lib/mongodb";
import DestinationModel from "@/models/Destination.model"; // Assuming model import

const getDestinations = async () => {
  try{
    await connectMongoDB();
    const destinations = await DestinationModel.find().limit(20).sort({ ratings: -1 }).lean();
    return destinations
  }
  catch(error){
    console.log(error);
    
  }
}

const DestinationPage = async () => {
  
  
  const destinations = await getDestinations();
  return (
   <>
   <Destination destinations = {destinations}/>
   </>
  );
};

export default DestinationPage;
