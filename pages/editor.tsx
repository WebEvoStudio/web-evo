import {useState} from "react";
import {Editor} from "@bytemd/react";
import 'bytemd/dist/index.min.css'
export default function EditorPage() {
  const [value, setValue] = useState('')
  return (
    <div>
      <h1>Editor</h1>
      <Editor value={value} onChange={(v: string) => setValue(v)}/>
    </div>
  );
}
