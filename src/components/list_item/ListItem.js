import { useState } from "react";
import ShowDateTime from "../show_date_time/ShowDateTime";
import DeleteIcon from "../../assets/icons/DeleteIcon";
const DataType = {
  title: "title",
  description: "description",
};

export default function ListItem(props) {
  const [enteredTitle, setEnteredTitle] = useState(props.title);
  const [enteredDescription, setEnteredDescription] = useState(
    props.description
  );
  const changeTitleHandler = (enteredInputTitle) => {
    setEnteredTitle(enteredInputTitle);
  };
  const changeDescriptionHandler = (enteredInputDescription) => {
    setEnteredDescription(enteredInputDescription);
  };

  const saveEditedText = (event, dataType) => {
    switch (dataType) {
      case DataType.title:
        props.setTitle(event);
        break;
      case DataType.description:
        props.setDescription(event);
        break;
      default:
        break;
    }
  };
  return (
    <div className="hover:drop-shadow-3xl">
      <ShowDateTime date={props.date} />
      <form>
        <div className="flex bg-black/80 m-8 mt-0 p-[10px] rounded-xl">
          <div
            className="tooltip flex-auto w-[30%] p-[10px] text-white text-center font-bold
           m-[10px] rounded-[12px] bg-zinc-900 "
          >
            <input
              type="text"
              value={enteredTitle}
              placeholder="Title"
              className="bg-transparent w-[100%] truncate p-2 outline-none"
              onChange={(event) => changeTitleHandler(event.target.value)}
              onBlur={(event) => saveEditedText(event, DataType.title)}
            />
            <span className="tooltiptext">{enteredTitle}</span>
          </div>

          <div className="tooltip flex items-center p-[10px] text-slate-300/50 w-[70%] ">
            <input
              type="text"
              value={enteredDescription}
              placeholder="Description is optional"
              className="demo-input bg-transparent  w-[100%] truncate p-2 outline-none"
              onChange={(event) => changeDescriptionHandler(event.target.value)}
              onBlur={(event) => saveEditedText(event, DataType.description)}
            />
            {enteredDescription && (
              <span className="tooltiptext">{enteredDescription}</span>
            )}
          </div>

          <div className="flex justify-end text-slate-500 mr-[10px] text-xs">
            <div>
              <span
                className=" hover:cursor-pointer"
                onClick={props.DeleteItemHandler}
              >
                <DeleteIcon />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
