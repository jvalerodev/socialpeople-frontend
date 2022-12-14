/** STATE */
export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  picturePath: string;
  friends: Friends[];
  location?: string;
  occupation?: string;
  viewedProfile?: number;
  impressions?: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Friends = {
  _id?: string;
  firtsname?: string;
  lastname?: string;
  occupation?: string;
  location?: string;
  picturePath?: string;
};

export type Post = {
  _id: string;
  userId: string;
  firstname: string;
  lastname: string;
  location?: string;
  description?: string;
  picturePath?: string;
  userPicturePath?: string;
  likes?: Map<string, boolean>;
  comments?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export * from './appState';
export * from './theme';
export * from './register';
