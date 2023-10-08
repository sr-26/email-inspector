declare module 'email-inspector' {
    interface EmailInspectorOptions {
        /**
         * An array of custom free email providers to consider during validation.
        */
        customFreeProviders?: string[];
        /**
         * An array of email providers to exclude from the list of free providers during validation.
         */
        providersToRemove?: string[];
    }

    /**
     * Validate an email address.
     * @param email The email address to validate.
     * @param options Configuration options for email validation.
     * @returns True if the email is valid, false otherwise.
     */
    function validate(email: string, options?: EmailInspectorOptions): boolean;

    export = validate;
}
