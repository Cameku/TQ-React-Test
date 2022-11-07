import { Company } from '../models/Company';

export class ApiHelper {
  //Get key
  getKeyAsync = async (url: string): Promise<string> => {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');

    if (!response.ok) {
      const message = `Sorry, something went wrong  ${response.status} `;
      throw new Error(message);
    }

    const data = await response.json();
    console.log(data);

    return data;
  };

  getCompaniesAsync = async (key: string): Promise<Company[]> => {
    const resp = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key);
    if (!resp.ok) {
      const message = `Sorry, something went wrong  ${resp.status} `;
      throw new Error(message);
    }

    const data = await resp.json();
    return data;
    //console.log(data);
    //return JSON.parse(data);
  };
}
