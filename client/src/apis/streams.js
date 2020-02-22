import axios from 'axios';
import {networkToBroadcast} from '../networkConfig.js'

export default axios.create({
  baseURL: networkToBroadcast
});
