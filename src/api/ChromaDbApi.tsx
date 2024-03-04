import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Api = {
  createDb: async (modelName: string, dbName: string) => {
    const data = {
      modelName: modelName,
      dbName: dbName,
    };
    try {
      const response = await axios.post(`${BASE_URL}/vector_db/create_db/`, data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
  },
  dataUpload: async (dbName: string, modelName: string, file: FormData) => {
    const data = {
      dbName: dbName,
      modelName: modelName,
      file: file,
    };
    try {
      const response = await axios.post(`${BASE_URL}/vectro_db/data_upload/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
  },
};

export default Api;
