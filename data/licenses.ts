export type License = {
  entity: string;
  name: string;
  credential: {
    type: string;
    number: string;
  };
  dates: {
    start: string;
    end: string;
  };
};

export const licenses: Array<License> = [
  {
    entity: 'FINRA/SEC',
    name: 'Investment Advisor/Representative',
    credential: {
      type: 'CRD',
      number: '6984304',
    },
    dates: {
      start: '2019',
      end: '2023',
    },
  },
  {
    entity: 'Massachusetts Division of Insurance',
    name: 'Insurance Agent',
    credential: {
      type: 'NPN',
      number: '18946575',
    },
    dates: {
      start: '2018',
      end: '2023',
    },
  },
];
