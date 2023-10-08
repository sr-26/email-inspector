# Email Inspector

Email Inspector is a Node.js package for validating and inspecting email addresses.

## Installation

You can install this package using npm:

```bash
npm install email-inspector
```

## Usage

Here's how you can use Email Inspector in your Node.js application:

```javascript
const emailInspector = require('email-inspector');

const email = 'user@example.com';

if (emailInspector.validate(email)) {
  console.log('Email is valid');
} else {
  console.log('Email is invalid');
}

```

## Validation Against Free Email Providers

Email Inspector is designed to verify email addresses against a curated list of free email providers. This validation ensures that your business communication remains uninterrupted and can operate smoothly.

## Using IANA List of Registered TLDs

Email Inspector relies on the IANA (Internet Assigned Numbers Authority) list of registered Top-Level Domains (TLDs) to validate email addresses. This list is regularly updated and maintained to include all officially recognized TLDs on the internet.

By leveraging the IANA list, Email Inspector ensures that email addresses are validated against the most up-to-date and comprehensive collection of TLDs. This helps you maintain accurate email validation and ensures that your application remains in compliance with internet standards.

To learn more about the IANA list of registered TLDs, visit [IANA's official website](https://www.iana.org/domains/root/db).


## Options

You can customize the behavior of Email Inspector using the following options:

customFreeProviders (Array): An array of custom free email providers to consider during validation.

providersToRemove (Array): An array of email providers to exclude from the list of free providers during validation.


## Examples

```javascript
const emailInspector = require('email-inspector');

// Example 1: Basic validation
const isValid = emailInspector.validate('user@example.com');
console.log(isValid); // true

// Example 2: Custom free providers
const customProviders = ['customprovider.net'];
const isValidCustom = emailInspector.validate('user@customprovider.net', { customFreeProviders: customProviders });
console.log(isValidCustom); // false
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.


## License

MIT

## Author

Weasely