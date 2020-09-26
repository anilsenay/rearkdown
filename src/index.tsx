import * as React from "react";
import Markdown from "markdown-to-jsx";

interface Props {
  file: string;
  components?: object;
  overrides?: object;
  options?: object;
}

export const Rearkdown: React.FC<Props> = ({
  file,
  components = [],
  overrides,
  options,
}) => {
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((post) => setState(post))
      .catch((err) => console.error(err));
  }, [file]);

  const overridesObject: any = Object.assign(
    { ...overrides },
    ...Object.entries(components).map((items) => {
      console.log(items);
      if (items[0] && items[1]) return { [items[0]]: { component: items[1] } };
    })
  );

  return (
    <div>
      {state && (
        <Markdown
          children={state}
          options={{
            overrides: overridesObject,
            ...options,
          }}
        />
      )}
    </div>
  );
};
