import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Customer from "./components/Customer";
import { Component } from "react";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "suha",
    birthday: "980724",
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "sungha",
    birthday: "950519",
    gender: "male",
    job: "student",
  },

  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "junha",
    birthday: "930204",
    gender: "male",
    job: "student",
  },
];
class App extends Component {
  render() {
    return (
      <div>
        {/* map 사용할 떄 key 사용  */}
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              jon={c.job}
            />
          );
        })}
        {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />

        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />

        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */}
      </div>
    );
  }
}

export default App;
