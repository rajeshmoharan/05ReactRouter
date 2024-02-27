import { useEffect, useState } from "react";

function Github() {
  // use state
  const [data, setData] = useState([]);
  //  use effect
  useEffect(() => {
    fetch("https://api.github.com/users/rajeshmoharan")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  //
  return (
    <div className="flex justify-center ">
      <img
        src={data.avatar_url}
        className="w-60 rounded-full p-3"
        alt="profile_picture"
      />
      <h1 className="m-8 font-bold text-2xl">
        Github Followers={data.followers}
      </h1>
    </div>
  );
}
export default Github;
