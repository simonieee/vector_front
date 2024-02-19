import { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';
import { VectordbApi } from '@src/api';

type DbStatusType = {
  db_name: string;
  dimension: number;
};

const MainContainer = () => {
  const [DbStatus, setDbStatus] = useState<DbStatusType | undefined>();
  /**
   * MiniLM 모델 DB 생성
   * @returns
   */
  const createMiniLmVectorDB = async () => {
    const result = await VectordbApi.createMiniLmVectorDb();
    if (result) {
      setDbStatus({
        db_name: result.db_name,
        dimension: result.dimension,
      });
      console.log(result);
      return true;
    }
    return false;
  };
  /**
   * e5-large 모델 DB 생성
   * @returns
   */
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
      return result;
    }
    return false;
  };
  /**
   * Vector DB 삭제
   * @returns
   */
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
    const a = async () => {
      const result = await handleDbStatus();
      if (result) {
        setDbStatus({
          db_name: result.db_name,
          dimension: result.dimension,
        });
      }
    };
    a();
  }, []);

  return (
    <MainPresenter
      dbStatus={DbStatus}
      handleDeleteDb={handleDeleteDb}
      createLargeModelDB={createLargeModelDB}
      createMiniLmVectorDB={createMiniLmVectorDB}
    />
  );
};

export default MainContainer;
