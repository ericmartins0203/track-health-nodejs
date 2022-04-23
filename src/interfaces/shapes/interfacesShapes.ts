interface IUserTablesShape {
  id?: string;
  name: string;
  description?: string;
}

interface IAnamnesisShape {
  id?: string;
  diseases: boolean;
  allergy: boolean;
  continuousMedications: boolean;
  surgery: boolean;
  alcoholic: boolean;
  drugUser: boolean;
  smoker: boolean;
  physicalActivity: boolean;
  diabetes: boolean;
  hipertension: boolean;
}

export { IUserTablesShape, IAnamnesisShape };
