import axios from "axios";
import { FETCH_DATA_URL } from "../constants/api";

export class ApiService {
  fetchBinanceData = async () => await axios.get(FETCH_DATA_URL);
}
