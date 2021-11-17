import { useState } from "react";
import {
  Plate,
  createPlateOptions,
  DefaultPlatePluginKey,
  PlateRenderElementProps,
  PlateRenderLeafProps,
} from "@udecode/plate";
import {
  createReactPlugin,
  createHistoryPlugin,
  PlatePluginComponent,
} from "@udecode/plate-core";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import { createHeadingPlugin, ELEMENT_H1 } from "@udecode/plate-heading";
import {
  createBoldPlugin,
  createItalicPlugin,
  MARK_BOLD,
  MARK_ITALIC,
} from "@udecode/plate-basic-marks";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";

const Heading1Element = ({ children }: PlateRenderElementProps) => {
  return <h1 className="text-2xl">{children}</h1>;
};

const ParagraphElement = ({ children }: PlateRenderElementProps) => {
  return <p className="text-lg">{children}</p>;
};

const BoldLeaf = (props: PlateRenderLeafProps) => (
  <strong>{props.children}</strong>
);

const ItalicLeaf = (props: PlateRenderLeafProps) => <em>{props.children}</em>;

const renderElements = {
  [ELEMENT_H1]: Heading1Element,
  [ELEMENT_PARAGRAPH]: ParagraphElement,
  //   [ELEMENT_H2]: Heading2Element,
  //   [ELEMENT_H3]: Heading3Element,
  //   [ELEMENT_H4]: Heading4Element,
  //   [ELEMENT_MENTION]: MentionElement,
  //   [ELEMENT_UL]: BulletedListElement,
  //   [ELEMENT_OL]: NumberedListElement,
};

const renderMarks = {
  [MARK_BOLD]: BoldLeaf,
  [MARK_ITALIC]: ItalicLeaf,
};

const renderComponents = {
  ...renderElements,
  ...renderMarks,
};

export const createPlateComponents = (
  overrides?: Partial<Record<DefaultPlatePluginKey, PlatePluginComponent>>
) => {
  //   if (overrides) {
  //     Object.keys(overrides).forEach((key) => {
  //       components[key as "h1" | "p"] = overrides[key];
  //     });
  //   }

  return renderComponents as Record<
    DefaultPlatePluginKey,
    PlatePluginComponent
  >;
};

type ElementTypes = keyof typeof renderElements;
type MarkTypes = keyof typeof renderMarks;
type MappedMarks = {
  [M in MarkTypes]?: boolean;
};
type LeafString = {
  text: string;
};
type LeafType = MappedMarks & LeafString;

export const createElement = (
  text = "",
  {
    type = ELEMENT_PARAGRAPH,
    mark,
  }: {
    type?: ElementTypes;
    mark?: MarkTypes;
  } = {}
) => {
  const leaf: LeafType = { text };
  if (mark) {
    leaf[mark] = true;
  }

  return {
    type,
    children: [leaf],
  };
};

const EditorPage = () => {
  const [debugValue, setDebugValue] = useState("");
  const onChangeDebug = (newValue: any) => {
    setDebugValue(JSON.stringify(newValue));
  };

  const components = createPlateComponents();
  const options = createPlateOptions();

  const plugins = [
    createReactPlugin(),
    createHistoryPlugin(),
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createTrailingBlockPlugin({ type: ELEMENT_PARAGRAPH }),
    createNormalizeTypesPlugin({
      rules: [
        { path: [0], strictType: ELEMENT_H1 },
        { path: [1], strictType: ELEMENT_PARAGRAPH },
      ],
    }),
  ];

  const editableProps = {
    // placeholder: "Text goes here...",
  };

  const initialValue = [
    createElement("Heading 1 yes", { type: ELEMENT_H1 }),
    createElement("Text in a paragraph", { type: ELEMENT_PARAGRAPH }),
    createElement("Bold text", { mark: MARK_BOLD }),
    createElement("Italic text please", { mark: MARK_ITALIC }),
  ];

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="w-1/2 p-4 my-12 border border-white">
        <Plate
          editableProps={editableProps}
          initialValue={initialValue}
          plugins={plugins}
          components={components}
          options={options}
          onChange={onChangeDebug}
        />
      </div>
      {debugValue}
    </div>
  );
};

export default EditorPage;
