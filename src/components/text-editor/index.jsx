'use client';

import { useState, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './menu-bar';
import CharacterCount from '@tiptap/extension-character-count';

export default function TextEditor({ className, onChange, value, ...props }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        wordCounter: (text) =>
          text.split(/\s+/).filter((word) => word !== '').length,
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'shadow-sm h-[437px] w-full focus-visible:outline-none p-4',
      },
    },
    content: value || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  const [wordsCount, setWordsCount] = useState(0);

  useEffect(() => {
    if (!editor) return;
    const update = () => setWordsCount(editor.storage.characterCount.words());
    editor.on('update', update);
    update();
    return () => editor.off('update', update);
  }, [editor]);

  return (
    <div className="w-full max-w-[1553px] overflow-y-auto break-words shadow rounded-xl">
      <MenuBar editor={editor} />
      <EditorContent
        className={`${className} placeholder:text-red-700`}
        editor={editor}
        {...props}
      />
      <div className="border border-slate-200 px-4 py-6 rounded-b-xl">
        <p className="text-xs">{wordsCount} Words</p>
      </div>
    </div>
  );
}
