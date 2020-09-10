# Rearkdown

Rearkdown is a react component for using your custom component in markdown files.

## Install

```bash
npm install rearkdown
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
        components={[CustomComponent, AnotherComponent]}
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

- `file` - a markdown file you imported
- `components` - An array to import your component into markdown file

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
      <Rearkdown file={markdownFile} components={[RoughComponent]} />
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

## Help us!

This was a short time project to use somewhere needed. If you like it, you can help us to make Rearkdown better. If you have any improvement please pull-request.

## License

GPL Licensed.
