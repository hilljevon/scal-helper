"use client"
import React, { useState } from 'react'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { createEditor } from 'slate'
import { BaseEditor, Descendant } from 'slate'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}
const TestForm = () => {
    const [editor] = useState(() => withReact(createEditor()))
    return (
        <div>TestForm</div>
    )
}

export default TestForm