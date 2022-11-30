import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const DB_URL =
    "https://react-http-request-26266-default-rtdb.firebaseio.com/meals.jsons";

  const fetchMeals = async () => {
    setLoading(true);

    const response = await fetch(DB_URL);

    if (!response.ok) {
      throw new Error("Some thing went wrong");
    }

    const data = await response.json();

    let transformedData = [];

    for (const key in data) {
      transformedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    setMeals(transformedData);
  };

  useEffect(() => {
    fetchMeals().catch((err) => {
      setError({ msg: err.message });
      setLoading(false);
    });
  }, []);
  return (
    <Card className={classes.meals}>
      {!error && loading && (
        <p className={classes["loading-text"]}>Loading...</p>
      )}
      {error && <p className={classes["error-text"]}>{error.msg}</p>}
      <ul>
        {meals.map((meal) => {
          return (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
