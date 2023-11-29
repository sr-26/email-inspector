const defaultFreeProviders = require('../free_providers');
const domainCache = new Map();
var Isemail = require('isemail');

function validate(email, options = {}) {
    if (!email) {
        throw new TypeError("Email is a required field");
    }

    email = email.toLowerCase();
    const isValidEmail = Isemail.validate(email);
    if (!isValidEmail) {
        throw new TypeError("Invalid email address");
    }

    let allFreeProviders = new Set([...defaultFreeProviders, ...options.customFreeProviders || []]);

    if (options.providersToRemove && options.providersToRemove.length > 0) {
        for (const providerToRemove of options.providersToRemove) {
            allFreeProviders.delete(providerToRemove);
        }
    }
    const tokens = email.split('@');
    const domain = tokens.length > 1 ? tokens[tokens.length - 1]  : undefined;
    if(!domain){
        throw new TypeError("Invalid email address (missing domain)");
    }

    if (domainCache.has(domain)) {
        return domainCache.get(domain);
    }

    const isFreeProvider = allFreeProviders.has(domain);

    domainCache.set(domain, !isFreeProvider);

    return !isFreeProvider;
}

module.exports = validate;