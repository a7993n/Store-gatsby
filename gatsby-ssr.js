/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


import React from 'react'
export const onRenderBody = ({ setPostBodyComponents }) => {
    return setPostBodyComponents([
        <script data-ad-client="ca-pub-4511574107741478" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>,
    ])
}