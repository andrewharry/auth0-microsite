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

    ShowLabels: 'true' | 'false';
}