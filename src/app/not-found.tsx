import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Ой, такой страницы не существует...</h2>
      <Link href={"/music/main"}>На главную</Link>
    </div>
  );
};

export default NotFound;
