import { useState } from 'react';
import VDBSettingPresenter from './VDBSettingPresenter';
import { testDescTypes } from './type';

const initialTestDesc = {
  testName: '',
  userName: '',
};

const VDBSettingContainer = () => {
  /* Router */
  /* State */
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedData, setSelectedData] = useState<number | null>(null);
  const [testDesc, setTestDesc] = useState<testDescTypes>(initialTestDesc);
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <VDBSettingPresenter
      selectedModels={selectedModels}
      setSelectedModels={setSelectedModels}
      setSelectedData={setSelectedData}
      selectedData={selectedData}
      testDesc={testDesc}
      setTestDesc={setTestDesc}
    />
  );
};

export default VDBSettingContainer;
