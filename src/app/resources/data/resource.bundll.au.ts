import { IResources } from "../resource.interfaces";

/**
 * Overrides default values for Humm AU
 */
var resources : IResources = {
    LandingPage_Title: `<h1>Welcome back</h1>`,
    LandingPage_SubmitButton: 'Login',
    LandingPage_RegisterButton: null,
    Username_Label: 'Email address',
    Password_Label: null,
    ForgotPage_Title: null,
    ForgotPage_SubTitle: null,
    ForgotPage_SubmitButton: null,
    ForgotPassword_Link: 'Forgot your password?',
    FormField_Appearance: null,
    Theme_PrimaryColor: '#e0fa1d',
    Theme_AccentColor: '#ededed',
    Theme_WarnColor: null,
    Display_Navbar: 'true',
    Display_Labels: 'true'
};

export default resources;