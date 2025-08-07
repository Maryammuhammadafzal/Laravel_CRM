const Ziggy = {
    url: 'http://localhost',
    port: null,
    defaults: {},
    routes: {
        'customers.index': { uri: 'customers', methods: ['GET', 'HEAD'], domain: null },
        'customers.create': { uri: 'customers/create', methods: ['GET', 'HEAD'], domain: null },
        'customers.store': { uri: 'customers', methods: ['POST'], domain: null },
        'customers.edit': { uri: 'customers/{customer}/edit', methods: ['GET', 'HEAD'], domain: null, parameters: ['customer'] },
        'customers.update': { uri: 'customers/{customer}', methods: ['PUT', 'PATCH'], domain: null, parameters: ['customer'] },
        'customers.destroy': { uri: 'customers/{customer}', methods: ['DELETE'], domain: null, parameters: ['customer'] },
        'profile.edit': { uri: 'profile', methods: ['GET', 'HEAD'], domain: null },
        'profile.update': { uri: 'profile', methods: ['PUT'], domain: null },
        'logout': { uri: 'logout', methods: ['POST'], domain: null },
        'login': { uri: 'login', methods: ['GET', 'HEAD'], domain: null },
        'register': { uri: 'register', methods: ['GET', 'HEAD'], domain: null },
        'password.request': { uri: 'forgot-password', methods: ['GET', 'HEAD'], domain: null },
        'password.email': { uri: 'forgot-password', methods: ['POST'], domain: null },
        'password.reset': { uri: 'reset-password/{token}', methods: ['GET', 'HEAD'], domain: null, parameters: ['token'] },
        'password.store': { uri: 'reset-password', methods: ['POST'], domain: null },
        'verification.notice': { uri: 'verify-email', methods: ['GET', 'HEAD'], domain: null },
        'verification.verify': { uri: 'verify-email/{id}/{hash}', methods: ['GET', 'HEAD'], domain: null, parameters: ['id', 'hash'] },
        'verification.send': { uri: 'email/verification-notification', methods: ['POST'], domain: null },
        'password.confirm': { uri: 'confirm-password', methods: ['GET', 'HEAD'], domain: null },
        'password.update': { uri: 'password', methods: ['PUT'], domain: null },
    }
};

export { Ziggy };
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}