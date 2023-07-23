import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from "@tanstack/react-query";
import Title from "./title/Title";
import useTable from "./useTable";
import style from "./table.module.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([]);

  const { getBinanceData } = useTable({ setColumnDefs, setRowData });
  const { isError } = useQuery(["binanceData"], getBinanceData);

  if (isError) return <h1>Error getting data...</h1>;

  return (
    <section className={style.table_page_wrapp}>
      <Title name="Binanace AG Grid" />
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
