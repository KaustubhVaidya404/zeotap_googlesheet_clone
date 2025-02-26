import { HotTable } from "@handsontable/react-wrapper";
import "handsontable/dist/handsontable.full.css";
import { HyperFormula } from "hyperformula";
import { useState } from "react";

function Grid() {
  const initialRows = 100; // Initial number of rows
  const initialCols = 100; // Initial number of columns
  const defaultRowData = Array(initialCols).fill(""); // Empty row template

  const [data, setData] = useState(
    Array.from({ length: initialRows }, () => [...defaultRowData])
  );

  // Function to add rows dynamically when needed
  const addMoreRows = () => {
    const newRows = 20; // Add 20 more rows
    const additionalRows = Array.from({ length: newRows }, () => [
      ...defaultRowData,
    ]);
    setData((prevData) => [...prevData, ...additionalRows]);
  };

  // Function to add columns dynamically when needed
  const addMoreCols = () => {
    const additionalCols = 10; // Add 10 more columns
    setData((prevData) =>
      prevData.map((row) => [...row, ...Array(additionalCols).fill("")])
    );
  };

  return (
    <div>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        stretchH="all"
        contextMenu={true}
        manualRowResize={true}
        manualColumnResize={true}
        licenseKey="non-commercial-and-evaluation"
        height="100vh"
        width="100vw"
        rowHeights="10px"
        colWidths="100px"
        dropdownMenu={true}
        filters={true}
        formulas={{
            engine: HyperFormula
        }}
        // Add more rows when scrolling to the bottom
        afterScrollVertically={() => {
          const lastRow = data.length - 1;
          addMoreRows();
        }}
        // Add more columns when scrolling to the right
        afterScrollHorizontally={() => {
          const lastCol = data[0].length - 1;
          addMoreCols();
        }}
      />
    </div>
  );
}

export default Grid;
