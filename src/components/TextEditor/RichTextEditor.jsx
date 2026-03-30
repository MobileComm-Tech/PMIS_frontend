import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ itm, setValue, getValues }) => {
  // Toolbar configuration for full basic formatting
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // headings
      ["bold", "italic", "underline", "strike"], // text styles
      [{ list: "ordered" }, { list: "bullet" }], // lists
      ["blockquote", "code-block"], // blocks
      ["link", "image"], // media
      ["clean"], // remove formatting
    ],
  };

  // Formats that the editor supports
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      value={getValues(itm.name) || ""} // keep existing content
      onChange={(val) => setValue(itm.name, val)} // store HTML directly
      modules={modules}
      formats={formats}
      placeholder={itm.placeholder || "Write your message..."}
      className="bg-white text-black rounded-md min-h-[150px]"
    />
  );
};

export default RichTextEditor;
