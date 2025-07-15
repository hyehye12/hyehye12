import { FC } from "react";

export interface CardData {
  imgUrl: string;
  name: string;
  jobTitle: string;
  info: string;
}

type CardProps = {
  card: CardData;
};

const Card: FC<CardProps> = ({ card }) => {
  const { imgUrl, name, jobTitle, info } = card;

  return (
    <div className="max-w-sm p-6 mx-auto mt-10 text-center bg-white border rounded-lg shadow">
      <img
        className="mb-5 rounded-full object-rounded item-center"
        src={imgUrl}
        alt={`${name} 사진`}
      />
      <p className="bg-white">{name}</p>
      <p>{jobTitle}</p>
      <p className="text-gray-500">{info}</p>
    </div>
  );
};

export default Card;
