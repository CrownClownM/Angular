export interface Usuario {
    localId?: string;
    email: string;
}

export interface AuthResponse {
    localId: string;
    email: string;
    displayName?: string;
    idToken?: string;
    registered?: boolean;
    refreshToken?: string;
    expiresIn?: number;
}

export interface Login {
    users: User[];
}

export interface User {
    localId:           string;
    email:             string;
    emailVerified:     boolean;
    displayName:       string;
    providerUserInfo:  ProviderUserInfo[];
    photoUrl:          string;
    passwordHash:      string;
    passwordUpdatedAt: number;
    validSince:        string;
    disabled:          boolean;
    lastLoginAt:       string;
    createdAt:         string;
    customAuth:        boolean;
}

export interface ProviderUserInfo {
    providerId:  string;
    displayName: string;
    photoUrl:    string;
    federatedId: string;
    email:       string;
    rawId:       string;
    screenName:  string;
}
