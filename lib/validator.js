import { tlds } from '@hapi/tlds';

import Joi from 'joi';
import defaultFreeProviders from '../free_providers';
const domainCache = new Map();

function validate(email, options = {}) {
    if (!email) {
        throw new TypeError("Email is a required field");
    }

    email = email.toLowerCase();

    const emailSchema = Joi.string().email({ tlds: { allow: tlds } }).required();
    const { error } = emailSchema.validate(email);

    if (error) {
        return false;
    }

    let allFreeProviders = new Set([...defaultFreeProviders, ...options.customFreeProviders || []]);

    if (options.providersToRemove && options.providersToRemove.length > 0) {
        for (const providerToRemove of options.providersToRemove) {
            allFreeProviders.delete(providerToRemove);
        }
    }
    const domain = email.split('@')[1];

    if (domainCache.has(domain)) {
        return domainCache.get(domain);
    }

    const isFreeProvider = allFreeProviders.has(domain);

    domainCache.set(domain, !isFreeProvider);

    return !isFreeProvider;
}

export default validate;
