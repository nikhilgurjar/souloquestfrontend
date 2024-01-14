import React from "react";
import { Container } from "@mui/material";
import ItenaryCover from "../components/ItenaryCover";
import ExploreSection from "../components/ExploreSection";
import ItenarySection from "../components/ItenarySection";
import SaveButton from "../components/SaveButton";

//params will contain itenary ID
const CreateItenaryPage = ({ params }) => {
  return (
    <Container maxWidth={"lg"}>
      <ItenaryCover />
      {/* <ExploreSection /> */}
      <ItenarySection />
      <SaveButton itenaryId={params.itenaryId}/>
    </Container>
  );
};

export default CreateItenaryPage;
