import { CreateUserData, ListPlacesData, AddReviewData, AddReviewVariables, GetUserReviewsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListPlaces(options?: useDataConnectQueryOptions<ListPlacesData>): UseDataConnectQueryResult<ListPlacesData, undefined>;
export function useListPlaces(dc: DataConnect, options?: useDataConnectQueryOptions<ListPlacesData>): UseDataConnectQueryResult<ListPlacesData, undefined>;

export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;
export function useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;

export function useGetUserReviews(options?: useDataConnectQueryOptions<GetUserReviewsData>): UseDataConnectQueryResult<GetUserReviewsData, undefined>;
export function useGetUserReviews(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserReviewsData>): UseDataConnectQueryResult<GetUserReviewsData, undefined>;
