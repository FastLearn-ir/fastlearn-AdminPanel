import { createRoot } from 'react-dom/client';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import router from './Routes/router';
import theme from './Theme/Index';

import './Styles/index.css';
import './Styles/fonts.css';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

createRoot(document.getElementById('root')).render(
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </CacheProvider>
)