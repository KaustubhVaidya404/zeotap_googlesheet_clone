import { useDispatch } from 'react-redux';
import { setFormula } from '../redux/slices/formulaslice';
import { setQualityOperation } from '../redux/slices/dataqualityslice';

function Navbar() {
  const dispatch = useDispatch();

  const handleFormulaChange = (e) => {
    dispatch(setFormula(e.target.value));
  };

  const handleQualityOperationChange = (e) => {
    dispatch(setQualityOperation(e.target.value));
  };

  return (
    // <nav className="bg-gray-100 p-4 shadow-md">
    //   <p>Zeotap Google Sheet Clone</p>
    //   <div className="flex items-center justify-between">
    //     {/* Toolbar */}
    //     <div className="flex space-x-4">
    //       {/* Undo/Redo */}
    //       <button className="btn">Undo</button>
    //       <button className="btn">Redo</button>

    //       {/* Basic Formatting */}
    //       <button className="btn font-bold">B</button>
    //       <button className="btn italic">I</button>

    //       {/* Font Size */}
    //       <select className="btn">
    //         <option value="12">12</option>
    //         <option value="14">14</option>
    //         <option value="16">16</option>
    //         <option value="18">18</option>
    //         <option value="24">24</option>
    //       </select>

    //       {/* Font Color */}
    //       <input type="color" className="btn" />

    //     </div>

    //     {/* Formula Bar */}
    //     <div className="flex-1 mx-4">
    //       <input
    //         type="text"
    //         className="w-full p-2 border rounded"
    //         placeholder="Enter formula (e.g. =SUM(A1:A10))"
    //       />
    //     </div>

    //     {/* Cell Functions */}
    //     <div className="flex space-x-2">
    //       {/* Mathematical Functions */}
    //       <select className="btn">
    //         <option value="">Functions</option>
    //         <option value="SUM">SUM</option>
    //         <option value="AVERAGE">AVERAGE</option>
    //         <option value="MAX">MAX</option>
    //         <option value="MIN">MIN</option>
    //         <option value="COUNT">COUNT</option>
    //       </select>

    //       {/* Data Quality Functions */}
    //       <select className="btn">
    //         <option value="">Data Quality</option>
    //         <option value="TRIM">TRIM</option>
    //         <option value="UPPER">UPPER</option>
    //         <option value="LOWER">LOWER</option>
    //         <option value="REMOVE_DUPLICATES">Remove Duplicates</option>
    //         <option value="FIND_AND_REPLACE">Find & Replace</option>
    //       </select>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-gray-100 p-4 shadow-md">
      <p>Zeotap Google Sheet</p>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          {/* Formula Dropdown */}
          <select className="btn" onChange={handleFormulaChange}>
            <option value="">Functions</option>
            <option value="SUM">SUM</option>
            <option value="AVERAGE">AVERAGE</option>
            <option value="MAX">MAX</option>
            <option value="MIN">MIN</option>
            <option value="COUNT">COUNT</option>
          </select>

          {/* Data Quality Dropdown */}
          <select className="btn" onChange={handleQualityOperationChange}>
            <option value="">Data Quality</option>
            <option value="TRIM">TRIM</option>
            <option value="UPPER">UPPER</option>
            <option value="LOWER">LOWER</option>
            <option value="REMOVE_DUPLICATES">Remove Duplicates</option>
            <option value="FIND_AND_REPLACE">Find & Replace</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
