import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
      <Alert>
        Hello <span> World Alert! </span>
      </Alert>
      <Button color="dark" onClick={() => console.log("Clicked!")}>
        Sign Up
      </Button>
    </div>
  );
}

export default App;
