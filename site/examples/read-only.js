import React, { useState, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const ReadOnlyExample = () => {
  const [value, setValue] = useState(initialValue)
  const editor = useMemo(() => withReact(createEditor()), [])
  const [readOnly, setReadOnly] = useState(true)
  const [cnt, setCnt] = useState(0)
  return (
    <div>
      <div>
        Current readOnly is
        <button onClick={() => setReadOnly(!readOnly)}>
          {readOnly.toString()}
        </button>
        . onChange is called {cnt} times.
        <hr />
      </div>
      <Slate
        editor={editor}
        value={value}
        onChange={value => {
          setValue(value)
          setCnt(preCnt => preCnt + 1)
        }}
      >
        <Editable readOnly={readOnly} placeholder="Enter some plain text..." />
      </Slate>
    </div>
  )
}

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

export default ReadOnlyExample
