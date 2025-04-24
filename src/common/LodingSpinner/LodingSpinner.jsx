import React from "react";
import { ClipLoader } from "react-spinners";

const LodingSpinner = () => {
  return (
    <div>
      <ClipLoader
        color={"red"}
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LodingSpinner;
