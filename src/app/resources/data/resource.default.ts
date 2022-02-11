import { IResources } from "../resource.interfaces";

/**
 * Defines default values.  If the Country or Product doesn't wish to override they can leave it null
 */
var resources : IResources = {
    LandingPage_Title: '<h1>Let’s get you<br/>signed in.</h1>',
    LandingPage_SubmitButton: 'Sign In',
    LandingPage_RegisterButton: 'New to humm? Sign up',
    Username_Label: 'Email or mobile number',
    Password_Label: 'Password',
    ForgotPage_Title: 'Change your Password.',
    ForgotPage_SubTitle: 'To securely reset your password we’ll send a code to your mobile.',
    ForgotPage_SubmitButton: 'Send code',
    ForgotPassword_Link: 'Forgot password?',
    FormField_Appearance: 'fill',
    ShowLabels: "false",
    Theme_PrimaryColor: '#ff6c00',
    Theme_AccentColor: '#ff9b3f',
    Theme_WarnColor: '#f57c00'
};

export default resources;