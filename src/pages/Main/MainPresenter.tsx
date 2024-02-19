import DbStatus from './components/DbStatus';
import Stepper from './components/Stepper';

type Props = {
  dbStatus?: {
    db_name: string;
    dimension: number;
  };
  handleDeleteDb?: () => Promise<boolean>;
  createLargeModelDB?: () => Promise<boolean>;
};

const MainPresenter: React.FC<Props> = ({ dbStatus, handleDeleteDb }) => {
  const steps = [
    {
      title: '모델 및 DB 설정',
      content: <DbStatus dbStatus={dbStatus} handleDeleteDb={handleDeleteDb} />,
    },
    {
      title: '사용자 질의 입력',
      content: 'Second-content',
    },
    {
      title: '결과 확인',
      content: 'Last-content',
    },
  ];
  return (
    <div className="p-4 py-8 sm:ml-64 ">
      <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <Stepper steps={steps} />
      </div>
    </div>
  );
};

export default MainPresenter;
