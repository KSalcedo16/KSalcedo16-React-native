import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddReviewData {
  review_insert: Review_Key;
}

export interface AddReviewVariables {
  placeId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface Favorite_Key {
  userId: UUIDString;
  placeId: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface GetUserReviewsData {
  reviews: ({
    id: UUIDString;
    place: {
      name: string;
    };
      rating: number;
      reviewText: string;
  } & Review_Key)[];
}

export interface ListPlacesData {
  places: ({
    id: UUIDString;
    name: string;
    latitude: number;
    longitude: number;
  } & Place_Key)[];
}

export interface Photo_Key {
  id: UUIDString;
  __typename?: 'Photo_Key';
}

export interface Place_Key {
  id: UUIDString;
  __typename?: 'Place_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListPlacesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlacesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPlacesData, undefined>;
  operationName: string;
}
export const listPlacesRef: ListPlacesRef;

export function listPlaces(): QueryPromise<ListPlacesData, undefined>;
export function listPlaces(dc: DataConnect): QueryPromise<ListPlacesData, undefined>;

interface AddReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
  operationName: string;
}
export const addReviewRef: AddReviewRef;

export function addReview(vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;
export function addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;

interface GetUserReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserReviewsData, undefined>;
  operationName: string;
}
export const getUserReviewsRef: GetUserReviewsRef;

export function getUserReviews(): QueryPromise<GetUserReviewsData, undefined>;
export function getUserReviews(dc: DataConnect): QueryPromise<GetUserReviewsData, undefined>;

