export interface PhoneNumber {
  country: string;
  countryCode: string;
  phoneNumber: string;
}
export interface IdPhoneNumber extends PhoneNumber {
  id: number;
}
