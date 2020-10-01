[![npm version](https://badge.fury.io/js/rearkdown.svg)](https://badge.fury.io/js/rearkdown) [![GitHub version](https://badge.fury.io/gh/anilsenay%2Frearkdown.svg)](https://badge.fury.io/gh/anilsenay%2Frearkdown) ![Repo size](https://img.shields.io/github/repo-size/anilsenay/rearkdown.svg) [![downloads](https://img.shields.io/npm/dm/rearkdown.svg)](https://npm-stat.com/charts.html?package=rearkdown) ![License](https://img.shields.io/npm/l/rearkdown.svg) [![contributors](https://img.shields.io/github/contributors/anilsenay/rearkdown.svg)](https://img.shields.io/github/contributors/anilsenay/rearkdown)

# Rearkdown

Rearkdown is a react component for using your custom component in markdown files.

## Install

```bash
npm install rearkdown
# yarn add rearkdown
```

## Usage

```js
import React from "react";
import { Rearkdown } from "rearkdown"; //import rearkdown

import markdownFile from "./markdown-files/markdown.md"; // a markdown file

import CustomComponent from "./components/CustomComponent";
import AnotherComponent from "./components/AnotherComponent";

function App() {
  return (
    <div>
      <Rearkdown
        file={markdownFile}
        components={{ CustomComponent, AnotherComponent }}
      />
    </div>
  );
}

export default App;
```

##### Usage in Markdown file

```md
# An h1 header

Paragraphs are separated by a blank line.

<CustomComponent>Hello</CustomComponent>
<AnotherComponent>World</AnotherComponent>

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists
look like:

- this one
- that one
- the other one

...
...
...
```

## Props

- `file`<sup>required</sup> - a markdown file you imported
- `components` - An object of components to import your component into markdown file
- `overrides` - Assign new components to default html tags
- `options` - Other options which markdown-to-jsx provides. (forceBlock, forceInline etc.)

## Full example

_Using react-rough-notation as our custom component_

##### App.js

```js
import React from "react";
import "./App.css";

import markdownFile from "./markdown.md";

import { RoughNotation } from "react-rough-notation";
import { Rearkdown } from "rearkdown";

const RoughComponent = ({ type, color, children }) => {
  return (
    <RoughNotation type={type} color={color} show={true}>
      {children}
    </RoughNotation>
  );
};

function App() {
  return (
    <div className="App">
      <Rearkdown file={markdownFile} components={{ RoughComponent }} />
    </div>
  );
}

export default App;
```

##### markdown.md

```md
# An h1 header

Paragraphs are separated by a blank line.

<RoughComponent type="strike-through" color="#ff0000">Hello</RoughComponent>
<RoughComponent type="underline">World</RoughComponent>

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists
look like:

- this one
- that one
- the other one
```

##### Example screenshot

![screenshot](https://i.ibb.co/0j61qvX/Screenshot-20200910-174254.png)

## Components

You can add your custom components to use in markdown file.

```js
components={{ MyComponent, AnotherComponent }}
```

```js
<Rearkdown
  file={markdownFile}
  components={{ CustomComponent, AnotherComponent }}
/>
```

#### Also you can set new name to your components

```js
components={{ "HelloWorld": MyComponent, AnotherComponent }}
```

Now your **MyComponent** will be used as `<HelloWorld>` in markdown file.

## Overrides

You can change default HTML tags with a component.

```js
overrides={{ h1: MyH1Component, p: MyParagraph }}
```

```js
<Rearkdown
  file={markdownFile}
  components={{ CustomComponent, AnotherComponent }}
  overrides={{ h1: MyH1Component, p: MyParagraph }}
/>
```

## Options

You can add other markdown-to-jsx options.

- [forceBlock](https://www.npmjs.com/package/markdown-to-jsx#optionsforceblock)
- [forceInline](https://www.npmjs.com/package/markdown-to-jsx#optionsforceinline)
- [namedCodesToUnicode](https://www.npmjs.com/package/markdown-to-jsx#optionsnamedcodestounicode)
- [disableParsingRawHTML](https://www.npmjs.com/package/markdown-to-jsx#optionsdisableparsingrawhtml)
- [slugify](https://www.npmjs.com/package/markdown-to-jsx#optionsslugify)

```js
options={{ forceBlock: true }}
---
options={{ forceBlock: true, forceInline: true, slugify: str => str }}
```

```js
<Rearkdown
  file={markdownFile}
  components={{ CustomComponent, AnotherComponent }}
  overrides={{ h1: MyH1Component, p: MyParagraph }}
  options={{ forceBlock: true }}
/>
```

## Help us!

This was a short time project to use somewhere needed. If you like it, you can help us to make Rearkdown better. If you have any improvement please pull-request.

## License

GPL Licensed.
