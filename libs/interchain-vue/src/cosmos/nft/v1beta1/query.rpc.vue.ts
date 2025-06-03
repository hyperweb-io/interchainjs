import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
import { getBalance, getOwner, getSupply, getNFTs, getNFT, getClass, getClasses } from "./query.rpc.func";
/* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
export const useGetOwner = buildUseVueQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: getOwner,
  queryKeyPrefix: "OwnerQuery"
});
/* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
export const useGetSupply = buildUseVueQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: getSupply,
  queryKeyPrefix: "SupplyQuery"
});
/* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 ERC721Enumerable */
export const useGetNFTs = buildUseVueQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: getNFTs,
  queryKeyPrefix: "NFTsQuery"
});
/* NFT queries an NFT based on its class and id. */
export const useGetNFT = buildUseVueQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: getNFT,
  queryKeyPrefix: "NFTQuery"
});
/* Class queries an NFT class based on its id */
export const useGetClass = buildUseVueQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: getClass,
  queryKeyPrefix: "ClassQuery"
});
/* Classes queries all NFT classes */
export const useGetClasses = buildUseVueQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: getClasses,
  queryKeyPrefix: "ClassesQuery"
});