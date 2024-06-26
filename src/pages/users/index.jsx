import { useEffect, useState } from "react";
import "./style.scss";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../config";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function Users() {
  let [data, setData] = useState([]);
  let info = collection(db, "users");

  useEffect(() => {
    const getRes = async () => {
      const res = await getDocs(info);
      setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRes();
  }, []);
  console.log(data);
  return (
    <>
      <div className="cards">
        {
            data.map(user => {
                return <Card className="w-96">
                
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {user.name} / {user.age} y.o
                  </Typography>
                  <Typography color="blue-gray" className="font-medium" textGradient>
                    ${user.money}
                  </Typography>
                </CardBody>
                
              </Card>
            })
        }
      </div>
    </>
  );
}
