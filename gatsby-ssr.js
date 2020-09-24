import wrapWithProvider from './wrap-with-provider'
import React from 'react'
export const onRenderBody = ({ setPostBodyComponents }) => {
    return setPostBodyComponents([
        <script data-ad-client="ca-pub-4511574107741478" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>,])
}
// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = wrapWithProvider
