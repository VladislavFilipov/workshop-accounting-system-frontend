import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useScannerData from "@src/store/scanner";

const useInputParse = () => {
  const navigate = useNavigate();
  const parseInput = useScannerData((state) => state.parseInput);
  const parseError = useScannerData((state) => state.parseError);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const typeOfScanning = useScannerData((state) => state.typeOfScanning);
  useEffect(() => {
    if (typeOfScanning) navigate(`/scanner/${typeOfScanning}s`);
    else navigate(`/scanner`);
  }, [typeOfScanning]);

  return { parseInput, inputRef, parseError };
};

export default useInputParse;
