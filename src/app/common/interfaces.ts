import { Auth0UserProfile } from "auth0-js";

export interface IUserInfo {
    accessToken?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    profile?: Auth0UserProfile;
}