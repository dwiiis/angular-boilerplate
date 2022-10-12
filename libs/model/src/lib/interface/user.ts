export interface Users {
  username?: string;
  userName?: string;
  email?: string;
  branch?: any;
  name?: string;
  nip?: any;
  groupName?: any;
  unitName?: any;
  position?: any;
  role?: RoleObject;
  cuid?: string;
  status?: string;
  lastLoginDate?: any;
  lastLoginDateDashboard?: any;
  disputeRole?: any;
}

export interface RoleObject {
  id?: any;
  name?: string;
  description?: string;
  permissions?: any;
}
