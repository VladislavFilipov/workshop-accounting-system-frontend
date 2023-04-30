/*
  Hook provides ref for input and method for handling button click. Depends of type in input it navigates to subroute.
*/
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useScannerData from "@src/store/scanner";

const scannerPathname = "/accounting/production";
const useInputParse = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const parseInput = useScannerData((state) => state.parseInput);
  const parseError = useScannerData((state) => state.parseError);
  const typeOfScanning = useScannerData((state) => state.typeOfScanning);
  const reset = useScannerData((state) => state.reset);

  useEffect(() => {
    reset();
    // if (typeOfScanning) navigate(`${scannerPathname}/${typeOfScanning}s`);
    // else if (location.pathname !== scannerPathname) navigate(scannerPathname);
  }, []);

  useEffect(() => {
    if (typeOfScanning) navigate(`${scannerPathname}/${typeOfScanning}s`);
    else if (location.pathname !== scannerPathname) navigate(scannerPathname);
  }, [typeOfScanning]);

  return { parseInput, inputRef, parseError };
};

export default useInputParse;
