"use client";

import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default CategoryPage;
