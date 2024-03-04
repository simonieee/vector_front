export type selectedModels = string[];
export type setSelectedModels = React.Dispatch<React.SetStateAction<string[]>>;

export interface Metadata {
  total: string;
  bottom: string;
  middle: string;
  top: string;
}

export interface DataItem {
  category: string;
  metadata: Metadata;
}

export interface SampleDataTypes {
  name: string;
  data: DataItem[];
}

export interface testDescTypes {
  testName: string;
  userName: string;
}

export interface CommonProps {
  selectedModels: string[];
  setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedData: number | null;
  setSelectedData: React.Dispatch<React.SetStateAction<number | null>>;
  setTestDesc: React.Dispatch<React.SetStateAction<testDescTypes>>;
  testDesc: testDescTypes;
}
