import React from "react";

interface CardProps {
  title: string;
  color?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  color = "dark:bg-gray-800 dark:border-gray-700 text-white shadow-gray-900/20",
  children,
}) => {
  return (
    <div className="mt-8 mb-8 flex flex-col gap-12">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div
          className={`relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr ${color} shadow-lg -mt-6 p-4`}
        >
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="p-4 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;
