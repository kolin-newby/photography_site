import Sidebar from "./sidebar";

export default function Layout({
  children = null,
  title = null,
  summary = null,
}) {
  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
}
