import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> Hello World Alert!
        </Alert>
      )}
      <Button color="dark" onClick={() => console.log("Clicked!")}>
        Sign Up
      </Button>
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default App;
