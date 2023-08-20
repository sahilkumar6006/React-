
const heading = React.createElement("h1",{id : "title",}
, "Namaste Everyone");

const heading2 = React.createElement("h2",{id: "title,"}, "hello sahil");

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const container = React.createElement("div",{
  id: "container"},
  [heading, heading2]
);

root.render(container);
