import Amplify from "@aws-amplify/core"

const local = {
    Auth: {
        identityPoolId: 'us-east-2:263d35ac-04fd-4f3c-b8aa-b1d392ae5632',
        region: 'us-east-2',
        identityPoolRegion: 'us-east-2',
        userPoolWebClientId: '18qbaacdktopd5lhvo700k6kaa',
        userPoolId: 'us-east-2_yT5u9VyA9',
        oauth: {
            domain: "testappc4e105b3-c4e105b3-dev.auth.us-east-2.amazoncognito.com",
            scope: [
                "email",
                "openid",
                "profile",
                "aws.cognito.signin.user.admin",
            ],
            redirectSignIn: "http://localhost:3000/",
            redirectSignOut: "http://localhost:3000/",
            responseType: "code"
        },
    }
}

Amplify.configure(local)