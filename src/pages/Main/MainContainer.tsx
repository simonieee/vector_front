import { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';
import { VectordbApi } from '@src/api';

type DbStatusType = {
  db_name: string;
  dimension: number;
};

const MainContainer = () => {
  const [DbStatus, setDbStatus] = useState<DbStatusType | undefined>();
  const createLargeModelDB = async () => {
    const result = await VectordbApi.createLargeLmVectorDb();
    if (result) {
      setDbStatus({
        db_name: result.db_name,
        dimension: result.dimension,
      });
      return true;
    }
    return false;
  };
  /**
   * Vector DB 상태 조회
   * @returns
   */
  const handleDbStatus = async () => {
    const result = await VectordbApi.getDbStatus();
    if (result) {
      setDbStatus(result);
      return true;
    }
    return false;
  };

  const handleDeleteDb = async () => {
    const result = await VectordbApi.deleteDb();
    if (result) {
      // eslint-disable-next-line no-undefined
      setDbStatus(undefined);
      return true;
    }
    return false;
  };
  /**
   * 초기 Vector DB 상태 업데이트
   */
  useEffect(() => {
    handleDbStatus();
  }, []);

  return (
    <MainPresenter
      dbStatus={DbStatus}
      handleDeleteDb={handleDeleteDb}
      createLargeModelDB={createLargeModelDB}
    />
  );
};

export default MainContainer;
