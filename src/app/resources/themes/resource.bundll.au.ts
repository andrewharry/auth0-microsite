import { IResources } from "../resource.interfaces";

/**
 * Overrides default values for Humm AU
 */
var resources : IResources = {
    Navbar_Enabled: null,
    Navbar_Mode: null,

    LandingPage_Title: `<h1>Welcome back</h1>`,
    LandingPage_SubmitButton: 'Login',
    LandingPage_RegisterButton: null,

    MobilePage_Title: null,
    MobilePage_SubmitButton: null,
    MobilePage_SignInButton: null,

    CodePage_Title: null,
    CodePage_SubmitButton: null,
    CodePage_SignInButton: null,

    Username_Mode: null,
    Display_Labels: 'true',
    Mobile_Label: null,
    MobileOrEmail_Label: null,
    Email_Label: 'Email address',
    Password_Label: null,
    Code_Label: null,
    FormField_Appearance: null,

    ForgotPage_Title: null,
    ForgotPage_SubTitle: null,
    ForgotPage_SubmitButton: null,
    ForgotPassword_Link: 'Forgot your password?',

    Theme_CustomCss: 'bundll',
    Theme_PrimaryColor: '#e0fa1d',
    Theme_AccentColor: '#ededed',
    Theme_WarnColor: null,
    Theme_BodyTextColor: null
};

export default resources;