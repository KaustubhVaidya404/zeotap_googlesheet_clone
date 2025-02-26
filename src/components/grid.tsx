import { HotTable } from "@handsontable/react-wrapper";
import "handsontable/dist/handsontable.full.css";
import { useState } from "react";

function Grid() {
  const initialRows = 40; // Initial number of rows
  const initialCols = 20; // Initial number of columns
  const defaultRowData = Array(initialCols).fill(""); // Empty row template

  const [data, setData] = useState(Array(initialRows).fill(defaultRowData));

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
      />
    </div>
  );
}

export default Grid;
