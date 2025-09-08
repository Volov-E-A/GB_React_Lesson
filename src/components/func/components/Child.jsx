import { memo, useEffect } from "react";
import { Button } from "../ui/Button";

export const Child = memo(({ count }) => {
  useEffect(() => {
    console.log("Child did mount");
    const interval = setInterval(() => {
      console.log(1);
    }, 1000);

    return () => {
      console.log("Cild unmount");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Child did mount");
  }, []);

  return (
    <>
      <h2> Child func component</h2>
      <Button type="button" className="btn">
        {" "}
        Click count
      </Button>
      <p>COUNT: {count}</p>
    </>
  );
});
