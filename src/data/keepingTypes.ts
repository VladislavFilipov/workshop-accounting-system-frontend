/*
  Temporary object of storage keeping types.
  
  In future will be replaced to data fetched from server.
*/

export const keepingTypes = {
  box20x30: {
    id: 1,
    name: "box20x30",
    ruName: "Коробка 20х30",
  },
  box30x40: {
    id: 2,
    name: "box30x40",
    ruName: "Коробка 30x40",
  },
  bag30l: {
    id: 3,
    name: "bag30l",
    ruName: "Мешок 30л",
  },
  bag60l: {
    id: 4,
    name: "bag60l",
    ruName: "Мешок 60л",
  },
};

export const keepingTypesNormalized = [
  {
    value: undefined,
    label: "- Не выбрано -",
  },
  ...Object.values(keepingTypes).map((value) => ({
    value: value.id,
    label: value.ruName,
  })),
];
