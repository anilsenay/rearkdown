import * as React from "react";
import Markdown from "markdown-to-jsx";

interface Props {
    file: string;
    components: Array<React.FC | React.Component | any>;
}

export const Rearkdown: React.FC<Props> = ({file, components}) => {
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
                        overrides:
                            components &&
                            Object.assign(
                                {},
                                ...components?.map((item: any) => {
                                    const name: string = item.name;
                                    return {[name]: {component: item}};
                                })
                            ),
                    }}
                />
            )}
        </div>
    );
};
