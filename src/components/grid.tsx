import { HotTable } from "@handsontable/react-wrapper";
import "handsontable/dist/handsontable.full.css";
import { HyperFormula } from "hyperformula";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFormula } from "../redux/slices/formulaslice";
import { clearQualityOperation } from "../redux/slices/dataqualityslice";

function Grid() {
  // const initialRows = 100;
  // const initialCols = 100;
  // const defaultRowData = Array(initialCols).fill("");
  // const [data, setData] = useState(
  //   Array.from({ length: initialRows }, () => [...defaultRowData])
  // );
  // const [selectedRange, setSelectedRange] = useState([]);

  // const currentFormula = useSelector((state) => state.formula.currentFormula);
  // const qualityOperation = useSelector(
  //   (state) => state.dataQuality.qualityOperation
  // );
  // const dispatch = useDispatch();
  // const hotTableRef = useRef(null); // Reference to the HotTable instance

  // // Handle cell selection
  // const handleAfterSelection = (r, c, r2, c2) => {
  //   setSelectedRange([r, c, r2, c2]); // Store the selected range of cells
  // };

  // // Apply formula logic when formula changes
  // useEffect(() => {
  //   if (currentFormula) {
  //     const updatedData = data.map((row, rowIndex) => {
  //       return row.map((cell, colIndex) => {
  //         if (currentFormula === "SUM") {
  //           // Example logic for SUM (can be extended based on your requirements)
  //           return row.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
  //         }
  //         // Add more formula logic (AVERAGE, MAX, etc.)
  //         return cell;
  //       });
  //     });
  //     setData(updatedData);
  //     dispatch(clearFormula());
  //   }
  // }, [currentFormula, data, dispatch]);

  // // Apply data quality operations
  // useEffect(() => {
  //   if (qualityOperation) {
  //     const updatedData = data.map((row) => {
  //       return row.map((cell) => {
  //         if (qualityOperation === "TRIM") {
  //           return cell.trim();
  //         }
  //         if (qualityOperation === "UPPER") {
  //           return cell.toUpperCase();
  //         }
  //         if (qualityOperation === "LOWER") {
  //           return cell.toLowerCase();
  //         }
  //         return cell;
  //       });
  //     });
  //     setData(updatedData);
  //     dispatch(clearQualityOperation());
  //   }
  // }, [qualityOperation, data, dispatch]);

  // // Function to add rows dynamically when needed
  // const addMoreRows = () => {
  //   const newRows = 20; // Add 20 more rows
  //   const additionalRows = Array.from({ length: newRows }, () => [
  //     ...defaultRowData,
  //   ]);
  //   setData((prevData) => [...prevData, ...additionalRows]);
  // };

  // // Function to add columns dynamically when needed
  // const addMoreCols = () => {
  //   const additionalCols = 10; // Add 10 more columns
  //   setData((prevData) =>
  //     prevData.map((row) => [...row, ...Array(additionalCols).fill("")])
  //   );
  // };

  // return (
  //   <div>
  //     <HotTable
  //       data={data}
  //       colHeaders={true}
  //       rowHeaders={true}
  //       stretchH="all"
  //       contextMenu={true}
  //       manualRowResize={true}
  //       manualColumnResize={true}
  //       licenseKey="non-commercial-and-evaluation"
  //       height="100vh"
  //       width="100vw"
  //       rowHeights="10px"
  //       colWidths="100px"
  //       formulas={{
  //         engine: HyperFormula,
  //       }}
  //       // Add more rows when scrolling to the bottom
  //       afterScrollVertically={() => {
  //         const lastRow = data.length - 1;
  //         addMoreRows();
  //       }}
  //       // Add more columns when scrolling to the right
  //       afterScrollHorizontally={() => {
  //         const lastCol = data[0].length - 1;
  //         addMoreCols();
  //       }}
  //     />
  //   </div>
  // );

  const initialRows = 100;
  const initialCols = 100;
  const defaultRowData = Array(initialCols).fill("");
  const [data, setData] = useState(Array.from({ length: initialRows }, () => [...defaultRowData]));
  const [selectedRange, setSelectedRange] = useState([]); // Track selected range

  const currentFormula = useSelector((state) => state.formula.currentFormula);
  const qualityOperation = useSelector((state) => state.dataQuality.qualityOperation);
  const dispatch = useDispatch();
  const hotTableRef = useRef(null); // To access Handsontable instance

  // Handle cell selection
  const handleAfterSelection = (r, c, r2, c2) => {
    setSelectedRange([r, c, r2, c2]); // Store the selected range of cells
  };

  // Apply formula logic when formula changes
  useEffect(() => {
    if (currentFormula && selectedRange.length > 0) {
      const [startRow, startCol, endRow, endCol] = selectedRange;
      const updatedData = [...data];

      // Apply formula to the selected cells
      for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
        for (let colIndex = startCol; colIndex <= endCol; colIndex++) {
          const currentCellValue = updatedData[rowIndex][colIndex];
          if (currentFormula === "SUM") {
            // Example for SUM formula (you can customize based on your requirements)
            const rowSum = updatedData[rowIndex].reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
            updatedData[rowIndex][colIndex] = rowSum; // Apply sum to the cell
          }
          // Add more formula logic (AVERAGE, MAX, etc.)
        }
      }

      setData(updatedData); // Update the grid with the new values
      dispatch(clearFormula());
    }
  }, [currentFormula, selectedRange, data, dispatch]);

  // Apply data quality operations
  useEffect(() => {
    if (qualityOperation && selectedRange.length > 0) {
      const [startRow, startCol, endRow, endCol] = selectedRange;
      const updatedData = [...data];

      // Apply quality operation to the selected cells
      for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
        for (let colIndex = startCol; colIndex <= endCol; colIndex++) {
          const currentCellValue = updatedData[rowIndex][colIndex];
          if (qualityOperation === "TRIM") {
            updatedData[rowIndex][colIndex] = currentCellValue.trim();
          } else if (qualityOperation === "UPPER") {
            updatedData[rowIndex][colIndex] = currentCellValue.toUpperCase();
          } else if (qualityOperation === "LOWER") {
            updatedData[rowIndex][colIndex] = currentCellValue.toLowerCase();
          }
          // Add more data quality operations (REMOVE_DUPLICATES, etc.)
        }
      }

      setData(updatedData); // Update the grid with the new values
      dispatch(clearQualityOperation());
    }
  }, [qualityOperation, selectedRange, data, dispatch]);

  
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
        afterSelection={handleAfterSelection} // Capture cell selection
        formulas={{
          engine: HyperFormula,
        }}
        ref={hotTableRef} // Reference to Handsontable instance
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
