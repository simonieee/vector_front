import { Button, Input, Typography, Select } from 'antd';
import { useEffect, useState } from 'react';

const { Text } = Typography;

type Props = {
  dbStatus?: {
    db_name: string;
    dimension: number;
  };
  handleDeleteDb?: () => Promise<boolean>;
  createLargeModelDB?: () => Promise<boolean>;
  createMiniLmVectorDB?: () => Promise<boolean>;
};

interface data {
  db_name?: string;
  dimension?: number;
}

const initialState: data = {
  db_name: '',
  dimension: 0,
};

const DbStatus: React.FC<Props> = ({
  dbStatus,
  handleDeleteDb,
  createLargeModelDB,
  createMiniLmVectorDB,
}) => {
  const [status, setStatus] = useState<data>(initialState);
  const [model, setModel] = useState<string>('');
  const onChangeModel = (value: string) => {
    setModel(value);
  };

  const onSearch = (value: string) => {
    setModel(value);
  };

  const onChangeDbStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dbStatus?.dimension);
  console.log(model);
  useEffect(() => {
    dbStatus?.dimension === 1024 ? setModel('e5-large') : setModel('miniLM');
  }, [dbStatus?.dimension]);

  useEffect(() => {
    model === 'e5-large'
      ? setStatus({ ...status, dimension: 1024 })
      : model === 'miniLM'
        ? setStatus({ ...status, dimension: 384 })
        : setStatus({ ...status, dimension: 0 });
  }, [model]);

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="mb-2 mt-10">
      <Text italic className="ml-1">
        Select Model
      </Text>
      <div className="mb-4">
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Choose an embedding model"
          optionFilterProp="children"
          onChange={onChangeModel}
          value={model}
          onSearch={onSearch}
          filterOption={filterOption}
          disabled={dbStatus?.db_name ? true : false}
          options={[
            {
              value: 'e5-large',
              label: 'intfloat/multilingual-e5-large',
            },
            {
              value: 'miniLM',
              label: 'paraphrase-multilingual-MiniLM-L12-v2',
            },
          ]}
        />
      </div>
      {/**
       * Vector DB Name Feild
       */}
      {/**
       * Vector DB Dimension Feild
       */}
      <Text italic className="ml-1">
        Vector DB Dimension
      </Text>
      <div className="mb-4 flex">
        <Input
          name="dimension"
          onChange={onChangeDbStatus}
          placeholder={
            dbStatus?.dimension ? dbStatus.dimension.toString() : 'Vector DB 차원수를 입력해주세요.'
          }
          value={dbStatus?.dimension ? dbStatus.dimension : status.dimension}
          className="mb-4"
          disabled
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          className="mr-2"
          style={{ backgroundColor: dbStatus?.db_name ? '#cbd5e1' : '#3b82f6' }}
          disabled={dbStatus?.db_name ? true : false}
          onClick={model === 'e5-large' ? createLargeModelDB : createMiniLmVectorDB}
        >
          DB 생성
        </Button>
        <Button
          type="primary"
          danger
          onClick={handleDeleteDb}
          disabled={dbStatus?.db_name ? false : true}
        >
          DB 초기화
        </Button>
      </div>
    </div>
  );
};

export default DbStatus;
