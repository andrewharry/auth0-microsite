import { IResources } from "../resource.interfaces";

/**
 * Overrides default values for Humm AU
 */
var resources : IResources = {
    Navbar_Enabled: null,
    Navbar_Mode: null,

    LandingPage_Title: null,
    LandingPage_SubmitButton: null,
    LandingPage_RegisterButton: null,

    Username_Mode: null,
    Display_Labels: 'false',   
    Username_Label: null,
    Password_Label: null,
    FormField_Appearance: null,

    ForgotPage_Title: `Reset your<br />password`,
    ForgotPage_SubTitle: `<p>Enter the email or mobile number for your account.</p><p>A reset password link will be sent to your email address.</p>`,
    ForgotPage_SubmitButton: null,
    ForgotPassword_Link: null,

    Theme_CustomCss: null,
    Theme_PrimaryColor: null,
    Theme_AccentColor: null,
    Theme_WarnColor: null,
    Theme_BodyTextColor: null 
};

export default resources;