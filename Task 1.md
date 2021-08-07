# AWS Simple Documentation
## 1- Login API

First of all look at this URL:
https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js

Use this function: `signIn()`

```javascript
const user = await Auth.signIn(username, password);
```

### Criteria :

- username : should be `email`
- password : should between `8-12` chars and include `1 uppercase`.

---

## 2- Sign up API

Use the function `signup()` which will return a data object of type [`ISignUpResult`](https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L136-L139) with a [`CognitoUser`](https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L48).

```javascript
const { user } = await Auth.signUp({
		username,
		password,
		attributes: {
				phone_number,   // optional - E.164 number convention
				// other custom attributes prepended with custom: eg. custom:favorite_flavor
		}
});
```

### Criteria :

- username : should be `email`
- password : should between `8-12` chars and include `1 uppercase`.
- attributes: these are optional and `phone_number` which can be phone number E.164 convention and `email` which should be email address can be passed to the attribute object as well other custom attributes prepend with `custom:` eg. `'custom:favorite_flavor': 'Cookie Dough'`
>Amazon Cognito does not dynamically create custom attributes on sign up. In order to use a custom attribute, the attribute must be first created in the user pool. To open the User Pool to create custom attributes using the Amplify ClI, run `amplify console auth`. If you are not using the Amplify CLI, you can view the user pool by visiting the AWS console and opening the Amazon Cognito dashboard.

- return: the following object
>```
>{
>    user: CognitoUser;
>    userConfirmed: boolean;
>    userSub: string;
>}
>```

You may also need confirm signupafter retrieving a confirmation code from the user if you've enabled multi-factor auth using `confirmSignUp()`:

```javascript
await Auth.confirmSignUp(username, code);
```

>for more complete solutions and advance usage of Multi-factor auth please read this guid: https://docs.amplify.aws/lib/auth/mfa/q/platform/js

---

## 3- Signout API

Use this function: `signIn()`

```javascript
await Auth.signOut();
```

Also you can signout from all devices by passing `global: true` to this function.
```javascript
await Auth.signOut({ global: true });
```
---
## 4- Forgot password

First of all look at this URL:
https://docs.amplify.aws/lib/auth/manageusers/q/platform/js

Use this function: `forgotPassword()`

```javascript
await Auth.forgotPassword(username);
```

This will send an email to the user with the link to recover the password.

### Criteria :

- username : should be `email`

---
## 5- Reset password

Use this function: `forgotPasswordSubmit()`

```javascript
await Auth.forgotPasswordSubmit(username, code, new_password);
```

### Criteria :

- username : should be `email`
- code: should be the code taken from the email
- new_password : should be the new password and between `8-12` chars and include `1 uppercase`.
