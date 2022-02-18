import { IResources } from "../resource.interfaces";

/**
 * Overrides default values for Humm AU
 */
var resources : IResources = {
    Navbar_Enabled: 'true',
    Navbar_Mode: 'desktop',

    LandingPage_Title: null,
    LandingPage_SubmitButton: null,
    LandingPage_RegisterButton: null,

    MobilePage_Title: null,
    MobilePage_SubmitButton: null,
    MobilePage_SignInButton: null,

    Username_Mode: 'mobile_only_on_native',
    Display_Labels: 'true',
    Mobile_Label: null,
    MobileOrEmail_Label: null,
    Email_Label: null,
    Password_Label: null,
    FormField_Appearance: 'standard',

    ForgotPage_Title: null,
    ForgotPage_SubTitle: null,
    ForgotPage_SubmitButton: null,
    ForgotPassword_Link: null,

    Theme_CustomCss: 'humm-au',
    Theme_PrimaryColor: null,
    Theme_AccentColor: '#ffffff',
    Theme_WarnColor: null,
    Theme_BodyTextColor: '#555555'
};

export default resources;