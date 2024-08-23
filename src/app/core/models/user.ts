export interface User {
  username: string;
  role: string;
  allowedMenus: string[];
  permissions: {
    [menu: string]: {
      canView: boolean;
      canAdd: boolean;
      canEdit: boolean;
      canDelete: boolean;
    };
  };
}
