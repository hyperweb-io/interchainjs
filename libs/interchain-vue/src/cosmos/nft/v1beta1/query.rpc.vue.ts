import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
import { getBalance, getOwner, getSupply, getNFTs, getNFT, getClass, getClasses } from "./query.rpc.func";
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetOwner = buildUseVueQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: getOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const useGetSupply = buildUseVueQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: getSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const useGetNFTs = buildUseVueQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: getNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const useGetNFT = buildUseVueQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: getNFT,
  queryKeyPrefix: "NFTQuery"
});
export const useGetClass = buildUseVueQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: getClass,
  queryKeyPrefix: "ClassQuery"
});
export const useGetClasses = buildUseVueQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: getClasses,
  queryKeyPrefix: "ClassesQuery"
});