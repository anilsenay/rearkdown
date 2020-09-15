import * as React from "react";
import Markdown from "markdown-to-jsx";

interface Props {
  file: string;
  components?: Array<React.FC | React.Component | any>;
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

  return (
    <div>
      {state && (
        <Markdown
          children={state}
          options={{
            slugify: (str) => str,
            overrides:
              components.length > 0
                ? Object.assign(
                    { ...overrides },
                    ...components?.map((item: any) => {
                      const name: string = item.name;
                      return { [name]: { component: item } };
                    })
                  )
                : {
                    ...overrides,
                  },
            ...options,
          }}
        />
      )}
    </div>
  );
};
