import { ReactNode, cache } from "react";
const getRole = cache(() => {
  const param = Math.floor(Math.random() * 10);
  console.info(param);
  if (param > 5) {
    return "admin";
  }
  return "guest";
});

export default async function Layout(props: {
  admin: ReactNode;
  guest: ReactNode;
}) {
  const role = getRole();
  return (
    <>
      {role === "admin" && props.admin}
      {role === "guest" && props.guest}
    </>
  );
}
