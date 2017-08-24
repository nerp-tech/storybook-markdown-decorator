import React from 'react';

export default ({ href, children }) => {
  if (children[0].indexOf('linkTo') === 0) {
    const f = new Function('e', `
      e.preventDefault();
      window.__${children[0]}(e);
    `);
    return <a href="#" onClick={f}>{href}</a>
  }

  return <a href={href}>{children}</a>;
};
