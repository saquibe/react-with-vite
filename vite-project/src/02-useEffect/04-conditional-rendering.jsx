import { useEffect, useState } from "react";

function MultipleReturnsBasics() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h3>multiple return basics</h3>
    </div>
  );
}

export default MultipleReturnsBasics;
