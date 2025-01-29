enum Role {
  Member,
  President,
  VicePresident,
  Secretary,
  Treasurer,
  InChargeOfBoardgames,
  InChargeOfWargames,
  InChargeOfRoleplayingGames
}

export interface Member {
  id: string;
  alias: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  role: Role;
  active: boolean;
  hasKey: boolean;
  crowdfundingPoints: number;
}

export interface NewMember {
  alias: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  role: Role;
  active: boolean;
  hasKey: boolean;
}