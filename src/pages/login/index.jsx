import { addDoc, collection } from "firebase/firestore";
import "./style.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { db } from "../../config";
import { useState } from "react";

export default function Login() {
  let [name, setName] = useState("");
  let [money, setMoney] = useState();
  let [age, setAge] = useState();

  let user = {
    name: name,
    money: money,
    age: age,
  };

  async function LogIn(collectionName, data) {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <>
      <div className="container">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              label="Name"
              size="lg"
            />
            <Input
              label="How much money do u have?"
              onChange={(e) => setMoney(e.target.value)}
              value={money}
              type="number"
              size="lg"
            />
            <Input
              label="Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              type="number"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => LogIn('users', user)} variant="gradient" fullWidth>
              Log In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
