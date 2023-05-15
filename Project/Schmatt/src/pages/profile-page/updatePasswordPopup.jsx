import getUser from "./../../user";

export default function UpdatePassword() {
  const user = getUser();
  return (
    <div className="w-96 h-96 bg-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10"></div>
  );
}
