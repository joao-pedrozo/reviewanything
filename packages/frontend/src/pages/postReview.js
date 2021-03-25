import React, { useEffect } from 'react';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import { useState } from 'react';
import 'draft-js/dist/Draft.css';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import styled, { css } from 'styled-components';

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;

const PostReview = () => {
  useEffect(() => {
    setState(true);
  }, []);

  const [state, setState] = useState(false);
  const [testState, setTestState] = useState(false);

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );

  const [editorState2, setEditorState2] = React.useState(() =>
    EditorState.createEmpty(),
  );

  const handleOnChange = (newEditorState) => {
    setEditorState(newEditorState);
    setEditorState2(newEditorState);
  };

  return (
    <>
      <div
        style={{
          border: '1px solid black',
          marginTop: '10px',
        }}
      >
        {state && (
          <div className="teste123912">
            <Editor
              editorState={editorState}
              onChange={handleOnChange}
              plugins={[staticToolbarPlugin]}
            />
            <Toolbar />
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setTestState(true);
        }}
      >
        teste
      </button>
      <div
        style={{
          border: '1px solid black',
          marginTop: '10px',
        }}
        className="teste123912"
      >
        <Editor
          editorState={editorState2}
          plugins={[staticToolbarPlugin]}
          onChange={() => {}}
        />
      </div>
    </>
  );
};

export default PostReview;
