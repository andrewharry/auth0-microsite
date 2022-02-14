export interface IResources {
    [key: string]: string | null;

    LandingPage_Title: string | null;
    LandingPage_SubmitButton: string | null;
    LandingPage_RegisterButton: string | null;
    Username_Label: string | null;
    Password_Label: string | null;

    ForgotPage_Title: string | null;
    ForgotPage_SubTitle: string | null;
    ForgotPage_SubmitButton: string | null;

    ForgotPassword_Link: string | null;

    FormField_Appearance: string | null;

    Navbar_Enabled: 'true' | 'false' | null;
    Navbar_Mode: NavbarModes | null;
    Display_Labels: 'true' | 'false' | null;

    Theme_CustomCss: string | null;
    Theme_PrimaryColor: string | null;
    Theme_AccentColor: string | null;
    Theme_WarnColor: string | null;
}

export type NavbarModes = 'mobile' | 'desktop';
export type EnableKeys = 'Navbar_Enabled' | 'Display_Labels';
export type ThemeKeys = 'Theme_CustomCss' | 'Theme_PrimaryColor' | 'Theme_AccentColor' | 'Theme_WarnColor';