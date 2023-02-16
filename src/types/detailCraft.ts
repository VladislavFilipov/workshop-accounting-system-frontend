export type TDetailCraftStatus = "WAITING" | "WORKING" | "COMPLETE";

export interface IDetailCraft {
  id: number;
  stage_number: number;
  status: TDetailCraftStatus;
  stage_id: {
    id: number;
    name: string;
    description: string;
  };
  details_id: {
    token: string;
    techNumber: string;
    amount: number;
    status: {};
    userId: {
      id: number;
      username: string;
      password: string;
      note: string;
      token: string;
      enterpriseId: number;
      status: {};
      role: {};
      firstName: string;
      lastName: string;
      createDate: string;
      enterpriseLocationId: null | string;
      jobs: [
        {
          id: number;
          name: string;
        },
        {
          id: number;
          name: string;
        },
      ];
    };
    enterpriseLocationId: {
      id: number;
      description: string;
      address: string;
      locationName: string;
      mailIndex: string;
    };
  };
  location_id: {
    id: 6;
    description: string;
    address: string;
    locationName: string;
    mailIndex: string;
  };
  create_date: string;
  ending_date: null | string;
  token: string;
}
