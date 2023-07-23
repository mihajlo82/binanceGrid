import axios from "axios";
import moment from "moment";
import { FETCH_DATA_URL } from "./constants";

const useTable = ({ setColumnDefs, setRowData }) => {
  const getBinanceData = async () => {
    return await axios
      .get(FETCH_DATA_URL)
      .then((response) => {
        if (response?.status === 200) {
          const allData = response.data.slice(0, 1000).map((item) => {
            return {
              ...item,
              closeTime: moment(new Date(item.closeTime)).format("DD/MM/YYYY"),
              openTime: moment(new Date(item.openTime)).format("DD/MM/YYYY"),
            };
          });

          const mapped = Object.keys(allData[0]).map((item, index) => {
            return { field: item, sortable: index === 0 && true };
          });

          setColumnDefs(mapped);
          setRowData(allData);

          return response;
        }
        throw new Error("Error getting data...");
      })
      .catch((error) => window.alert(error));
  };
  return { getBinanceData };
};

export default useTable; 