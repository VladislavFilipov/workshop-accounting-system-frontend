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
  bag40x50: {
    id: 3,
    name: "bag40x50",
    ruName: "Мешок 40x50",
  },
  bag50x60: {
    id: 4,
    name: "bag50x60",
    ruName: "Мешок 50x60",
  },
};

export const keepingTypesNormalized = Object.values(keepingTypes).map(
  (value) => ({
    value: value.id,
    label: value.ruName,
  }),
);
