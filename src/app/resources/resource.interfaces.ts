export interface IResources {
    [key: string]: string | null;

    Navbar_Enabled: 'true' | 'false' | null;
    Navbar_Mode: NavbarModes | null;

    LandingPage_Title: string | null;
    LandingPage_SubmitButton: string | null;
    LandingPage_RegisterButton: string | null;
    
    Username_Mode: UsernameModes | null;
    Display_Labels: 'true' | 'false' | null;
    Username_Label: string | null;
    Password_Label: string | null;
    FormField_Appearance: string | null;

    ForgotPage_Title: string | null;
    ForgotPage_SubTitle: string | null;
    ForgotPage_SubmitButton: string | null;
    ForgotPassword_Link: string | null;

    Theme_CustomCss: string | null;
    Theme_PrimaryColor: string | null;
    Theme_AccentColor: string | null;
    Theme_WarnColor: string | null;
    Theme_BodyTextColor: string | null;
}

export type UsernameModes = 'mobile_only' | 'mobile_only_on_native' | 'email_only' | 'mobile_or_email'| 'mobile_or_email_on_desktop';
export type NavbarModes = 'mobile' | 'desktop' | 'both';
export type EnableKeys = 'Navbar_Enabled' | 'Display_Labels';
export type ThemeKeys = 'Theme_CustomCss' | 'Theme_PrimaryColor' | 'Theme_AccentColor' | 'Theme_WarnColor' | 'Theme_BodyTextColor';