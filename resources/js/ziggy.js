const Ziggy = {"url":"http:\/\/laravel-vercel.test","port":null,"defaults":{},"routes":[]};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
