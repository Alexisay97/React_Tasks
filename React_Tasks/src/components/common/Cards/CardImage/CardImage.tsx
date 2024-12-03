interface CardImageProps {
  image: string;
  altImage?: string;
  title: string;
  description: string;
  childrenButtons?: any;
}

const CardImage: React.FC<CardImageProps> = ({
  image,
  altImage = "",
  title,
  description,
  childrenButtons,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img className="w-full h-auto rounded-t-lg" src={image} alt={`${altImage}`} />
    
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        {childrenButtons ? <div>{childrenButtons}</div> : null}
      </div>
    </div>
  );
};

export default CardImage;
