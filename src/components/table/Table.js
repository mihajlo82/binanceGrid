import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from "@tanstack/react-query";
import Error from "../error/Error";
import Title from "../../utils/title/Title";
import useTable from "./hooks/useTable";
import style from "./table.module.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BINANCE_TITLE } from "../../constants/text";

const Table = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([]);

  const { getBinanceData } = useTable({ setColumnDefs, setRowData });
  const { isError, isLoadingError } = useQuery(["binanceData"], getBinanceData);

  if (isError || isLoadingError) return <Error />;

  return (
    <section className={style.table_page_wrapp}>
      <Title name={BINANCE_TITLE} />
      <article className={`ag-theme-alpine-dark ${style.table_wrapp}`}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          pagination={true}
        />
      </article>
    </section>
  );
};

export default Table;
