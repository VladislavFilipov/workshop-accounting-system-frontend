import { JSONTree } from "react-json-tree";

import useDetailCraftByInput from "@src/pages/Scanner/useDetailCraftByInput";

const ScannerPage = () => {
  const {
    detailCraft,
    getDetailCraft,
    typeOfScanning,
    error,
    isFetching,
    inputRef,
  } = useDetailCraftByInput();

  const handleGetDataClick = () => {
    getDetailCraft();
  };

  console.log("detailCraft", detailCraft);

  return (
    <div>
      <textarea ref={inputRef} autoFocus />
      <br />
      {/* <button
        onClick={() => {
          if (inputRef && inputRef.current)
            inputRef.current.value = `item\n03069e7f-c520-4189-a499-d17dcd84316f`;
        }}
      >
        Test fill
      </button> */}

      {/* {inputRef?.current?.value && ( */}
      <button onClick={handleGetDataClick}>Получить данные</button>
      {/* )} */}

      {error ? (
        <p>{(error as Error).message}</p>
      ) : (
        <>
          {typeOfScanning && <p>Тип: {typeOfScanning}</p>}
          <br />

          {/* <p>{detailCraft && JSON.stringify(detailCraft)}</p> */}
          <p>{detailCraft && <JSONTree data={detailCraft} />}</p>
        </>
      )}
    </div>
  );
};

export default ScannerPage;
