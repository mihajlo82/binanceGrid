import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FETCH_DATA_URL } from './constants';
import style from './table.module.css';
import axios from 'axios';
import Title from './title/Title';
import moment from 'moment/moment';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    ///IMPLEMENT CACHING???
    axios
      .get(FETCH_DATA_URL, abortController.signal)
      .then((response) => {
        if (response?.status === 200) {
          const allData = response.data.slice(0, 1000).map((item) => {
            return {
              ...item,
              closeTime: moment(new Date(item.closeTime)).format('DD/MM/YYYY'),
              openTime: moment(new Date(item.openTime)).format('DD/MM/YYYY'),
            };
          }); 

          const mapped = Object.keys(allData[0]).map((item) => {
            return { field: item, sortable: true };
          });

          setColumnDefs(mapped);
          setRowData(allData);

          return;
        }
        throw new Error('Error getting data...');
      })
      .catch((error) => window.alert(error))
      .finally(() => abortController.abort());
  }, []);

  return (
    <section className={style.table_page_wrapp}>
      <Title name='Binanace AG Grid' />
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
