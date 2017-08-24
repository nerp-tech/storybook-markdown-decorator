# Storybook Markdown Decorator

## Getting Started

```
yarn add --dev storybook-markdown-decorator babel-plugin-transform-decorators-legacy
```

Then add the following to you `.babelrc` file:

```
"plugins": [
  "transform-decorators-legacy"
]
```

## Usage

The following function signatures are available:

```jsx
@storybook(name [String], description [String], reactExample [Function])
@storybook(name [String], description [String])
@storybook(description [String])
```

All parameters are optional, however:

Example:

```jsx
import storybook from 'storybook-markdown-decorator';

@storybook('default', `
# \\<MyComponent /\\>

You can use any **markdown** here

\`\`\`
<MyComponent>
  Test
</MyComponent>
\`\`\`

For more information, see:

* [linkTo('MyComponent', 'A')](A)
* [linkTo('MyComponent', 'B')](B)
`,
() => (
  <MyComponent>
    Test
  </MyComponent  
))
class MyComponent extends Component {
   // ...
}
```

You can use a `linkTo` in your markdown using the following (albeit odd) syntax:

```
[linkTo('Component Name', 'Story Name')](Text goes here)
```

## Contributing

Feel free to fork this repo, report an issue, or submit a pull request!
