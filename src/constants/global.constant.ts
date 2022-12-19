export const __Login = {
  something_went_wrong: 'Something went wrong, try again!!!',
};

export enum __Cookie {
  loggedIn = 'loggedIn',
  userId = 'userId',
  storeInfo = 'storeInfo',
}

// cookie_expirty in days
export const __Cookie_Expiry = {
  userId: 2,
};

export enum __Error {
  storeIdMissing = 'STORE_ID is missing',
  noPageTypeFound = 'PageType is missing',
}
