import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useScannerData from "@src/store/scanner";

const scannerPathname = "/scanner";
const useInputParse = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const parseInput = useScannerData((state) => state.parseInput);
  const parseError = useScannerData((state) => state.parseError);
  const typeOfScanning = useScannerData((state) => state.typeOfScanning);

  useEffect(() => {
    if (typeOfScanning) navigate(`${scannerPathname}/${typeOfScanning}s`);
    else if (location.pathname !== scannerPathname) navigate(scannerPathname);
  }, [typeOfScanning]);

  return { parseInput, inputRef, parseError };
};

export default useInputParse;
