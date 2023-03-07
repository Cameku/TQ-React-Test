import { Company } from '../models/Company';

export class ApiHelper {
  //Get key
  getKeyAsync = async (): Promise<string> => {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');

    if (!response.ok) {
      const message = `Sorry, Fetching the key did not work, error type -  ${response.status} `;
      throw new Error(message);
    }

    const data = await response.json();
    console.log(data);

    return data;
  };

  getCompaniesAsync = async (key: string): Promise<Company[]> => {
    const resp = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key);
    if (!resp.ok) {
      const message = `Sorry, Fetch company did not work - error type:  ${resp.status} `;
      throw new Error(message);
    }

    const data = await resp.json();
    return data;
  };

  submitCompanyAsync = async (company: Company, key: string): Promise<boolean> => {
    let response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company),
    });

    if (response.status === 200) {
      return true;
    }
    return false;
  };
}
