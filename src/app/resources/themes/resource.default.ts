import { IResources } from "../resource.interfaces";

/**
 * Defines default values.  If the Country or Product doesn't wish to override they can leave it null
 */
var resources : IResources = {
    Navbar_Enabled: null,
    Navbar_Mode: null,

    LandingPage_Title: '<h1>Let’s get you<br class="mobile-only"> signed in.</h1>',
    LandingPage_SubmitButton: 'Sign In',
    LandingPage_RegisterButton: 'New to humm? Sign up',

    MobilePage_Title: '<h1>Let’s get you started.</h1><h3>Enter your mobile number to join <strong>humm</strong><h3>',
    MobilePage_SubmitButton: 'Let’s go',
    MobilePage_SignInButton: 'Already have an account? Sign in',

    CodePage_Title: '<h1>Just checking it’s you.</h1><h3>We sent you a verfication code. <br class="mobile-only">Please enter it here.<h3>',
    CodePage_SubmitButton: 'Let’s go',
    CodePage_SignInButton: 'Already have an account? Sign in',

    Username_Mode: 'mobile_or_email',
    Display_Labels: 'false',
    Mobile_Label: 'Mobile number',
    MobileOrEmail_Label: 'Email or mobile number',
    Email_Label: 'Email address',
    Password_Label: 'Password',
    Code_Label: 'Enter the code',
    FormField_Appearance: 'fill',

    ForgotPage_Title: 'Change your Password.',
    ForgotPage_SubTitle: 'To securely reset your password we’ll send a code to your mobile.',
    ForgotPage_SubmitButton: 'Send code',
    ForgotPassword_Link: 'Forgot password?',

    Theme_CustomCss: null,
    Theme_PrimaryColor: '#ff6c00',
    Theme_AccentColor: '#ff9b3f',
    Theme_WarnColor: '#f57c00',
    Theme_BodyTextColor: '#333333'
};

export default resources;