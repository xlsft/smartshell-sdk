export const regexp = {
    /**
     * Regular expression for validating an email address.
     * Matches standard email format with support for domains and subdomains.
     * 
     * ```ts
     * const isValidEmail = regexp.email.test('example@mail.com'); // true
     * ```
     */
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    /**
     * Regular expression for validating a Russian phone number in the format:
     * +7 (XXX) XXX-XX-XX.
     * 
     * ```ts
     * const isValidPhone = regexp.phone.test('+7 (123) 456-78-90'); // true
     * ```
     */
    phone: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
};
