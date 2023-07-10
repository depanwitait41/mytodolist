import { useState } from "react";
import AddButton from "../add_button/AddButton";
import ListItem from "../list_item/ListItem";
export default function ListChart() {
  const [enteredData, setEnteredData] = useState([
    {
      title: "DCBA",
      description: "A description for item 1",
      date: new Date("December 12,2022 10:00:00"),
    },
    {
      title: "SRQP",
      description: "A description for item 2",
      date: new Date("July 05,2023 16:55:00"),
    },
  ]);
  const AddButtonHandler = (event) => {
    event.preventDefault();
    const enteredNewData = [...enteredData];
    const entry = {
      title: "",
      description: "",
      date: new Date(),
    };
    enteredNewData.push(entry);
    setEnteredData(enteredNewData);
  };

  const DeleteItemHandler = (index) => {
    const afterDeleteData = [...enteredData];
    afterDeleteData.splice(index, 1);
    setEnteredData(afterDeleteData);
  };
  const SetTitle = (index, newTitle) => {
    const newTitleData = [...enteredData];
    newTitleData[index].title = newTitle;
    setEnteredData(newTitleData);
  };
  const SetDescription = (index, newDescription) => {
    const newDescriptionData = [...enteredData];
    newDescriptionData[index].description = newDescription;
    setEnteredData(newDescriptionData);
  };
  return (
    <div className="p-10 w-2/3 box-content">
      {enteredData.map((item, index) => {
        return (
          <ListItem
            index={index}
            key={Math.floor(Math.random() * 10000)}
            title={item.title}
            description={item.description}
            date={item.date}
            DeleteItemHandler={() => DeleteItemHandler(index)}
            setTitle={(event) => SetTitle(index, event.target.value)}
            setDescription={(event) =>
              SetDescription(index, event.target.value)
            }
          />
        );
      })}
      <AddButton onClick={AddButtonHandler} />
    </div>
  );
}
