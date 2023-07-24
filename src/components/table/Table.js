import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from "@tanstack/react-query";
import Error from "../error/Error";
import Title from "../../utils/title/Title";
import useTable from "./hooks/useTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BINANCE_TITLE } from "../../constants/text";
import { TableContainer, TableWrapp } from "./styled";

const Table = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([]);

  const { getBinanceData } = useTable({ setColumnDefs, setRowData });
  const { isError, isLoadingError } = useQuery(["binanceData"], getBinanceData);

  if (isError || isLoadingError) return <Error />;

  return (
    <TableContainer>
      <Title name={BINANCE_TITLE} />
      <TableWrapp className={`ag-theme-alpine-dark`}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          pagination={true}
        />
      </TableWrapp>
    </TableContainer>
  );
};

export default Table;
