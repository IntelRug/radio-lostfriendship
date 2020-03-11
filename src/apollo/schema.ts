export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
   __typename?: 'Auth';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  token: Scalars['String'];
  createdAt: Scalars['Float'];
  expiresIn: Scalars['Float'];
  wasActiveAt: Scalars['Float'];
  user: Users;
};

export type IpInfo = {
   __typename?: 'IpInfo';
  id: Scalars['Int'];
  ip: Scalars['String'];
  private: Scalars['Boolean'];
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  isp?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['String']>;
  as?: Maybe<Scalars['String']>;
  listeners: Array<Listeners>;
};

export type Listeners = {
   __typename?: 'Listeners';
  id: Scalars['Int'];
  icecastId: Scalars['Int'];
  mount: Scalars['String'];
  ip: Scalars['String'];
  connectedFor: Scalars['Int'];
  agent?: Maybe<Scalars['String']>;
  connectedAt: Scalars['Int'];
  disconnectedAt?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
};

export type Location = {
   __typename?: 'Location';
  country: Scalars['String'];
  city: Scalars['String'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  login: Auth;
  register: Users;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type Query = {
   __typename?: 'Query';
  getAllUsers: Array<Users>;
  getListeners: Array<Listeners>;
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Users = {
   __typename?: 'Users';
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  registeredAt: Scalars['Float'];
  wasActiveAt: Scalars['Float'];
  tokens: Array<Auth>;
};

