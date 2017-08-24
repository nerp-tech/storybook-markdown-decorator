import React from 'react';

const storybook = (maybeName, maybeDocs, maybeExample) => {
  if (process.env.STORYBOOK_GIT_BRANCH) {
    const { storiesOf } = require('@storybook/react');
    const { linkTo } = require('@storybook/addon-links');
    const { default: injectCSS } = require('./injectCSS');
    const { default: injectJS } = require('./injectJS');
    const { default: Markdown } = require('./Markdown');

    const docs = maybeDocs || maybeName || '';
    const name = maybeDocs ? maybeName : 'default';
    const example = maybeExample ? maybeExample() : null;

    return function decorator(Target) {
      window.__linkTo = linkTo;
      injectCSS();
      injectJS();

      storiesOf(Target.name, module)
        .add(name, () => (
          <div className="markdown-body">
            <Markdown docs={docs} />
            {example}
          </div>
        ));
      }
  };
}

export default storybook;
