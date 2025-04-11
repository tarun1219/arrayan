import React, { useEffect } from "react";
import DataUploader from "../components/Inventory/DataUploader";
import IndexNavbar from "../components/Navbars/IndexNavbar";

const InventoryPage = () => {
  return (
    <>
      <IndexNavbar />
      <DataUploader />
    </>
  );
};

export default InventoryPage;
