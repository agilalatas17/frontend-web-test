import {
  Undo2 as UndoIcon,
  Redo2 as RedoIcon,
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Image as ImageIcon,
  AlignLeft as AlignLeftIcon,
  AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon,
  AlignJustify as AlignJustifyIcon,
} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Toggle } from '../ui/toggle';

export default function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <section className="flex bg-white p-4 border border-slate-200 rounded-t-xl">
      <ToggleGroup type="single" size="sm" className="gap-0 mr-4">
        <ToggleGroupItem value="undo" aria-label="Toggle undo" className="p-0">
          <UndoIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="redo" aria-label="Toggle redo" className="p-1">
          <RedoIcon className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="sm" className=" gap-0 mr-4">
        <ToggleGroupItem
          value="undo"
          aria-label="Toggle undo"
          className={`p-0 ${editor.isActive('bold') ? 'is-active' : ''}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="redo" aria-label="Toggle redo" className="p-1">
          <ItalicIcon className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <Toggle size="sm" aria-label="Toggle image">
        <ImageIcon className="!size-auto" />
      </Toggle>

      <ToggleGroup type="single" size="sm" className="ml-4">
        <ToggleGroupItem value="undo" aria-label="Toggle undo" className="p-0">
          <AlignLeftIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="redo" aria-label="Toggle redo" className="p-1 ">
          <AlignCenterIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="redo" aria-label="Toggle redo" className="p-1 ">
          <AlignRightIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="redo" aria-label="Toggle redo" className="p-1">
          <AlignJustifyIcon className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
}
