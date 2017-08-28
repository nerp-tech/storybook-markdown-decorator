import React from 'react';

const storybook = (...args) => {
  if (process.env.STORYBOOK_GIT_BRANCH) {
    const { storiesOf } = require('@storybook/react');
    const { linkTo } = require('@storybook/addon-links');
    const { default: injectCSS } = require('./injectCSS');
    const { default: injectJS } = require('./injectJS');
    const { default: Markdown } = require('./Markdown');

    return function decorator(Target) {
      let docs = '';
      let title = Target.name;
      let name = 'default';
      let example = null;

      switch (args.length) {
        case 1:
          docs = args[0];
          break;
        case 2:
          name = args[0];
          docs = args[1];
          break;
        case 3:
          name = args[0];
          docs = args[1];
          example = args[2]();
          break;
        case 4:
          title = args[0];
          name = args[1];
          docs = args[2];
          example = args[3]();
          break;
        default:
          return;
      }

      window.__linkTo = linkTo;
      injectCSS();
      injectJS();

      storiesOf(title, module)
        .add(name, () => (
          <div className="markdown-body">
            <Markdown docs={docs} />
            {example}
          </div>
        ));
      }
  } else {
      return () => {};
  }
}

export default storybook;
