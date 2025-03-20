import React, { useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState([]); 
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setCards(data); // Update state with API data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-[600px]  pt-[40px] relative flex justify-center">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          {...card}
          setCards={setCards}
          index={index}
          isFront={index === cards.length - 1}
        />
      ))}
    </div>
  );
};

const Card = ({
  id,
  source,
  setCards,
  index,
  isFront,
  name,
  price,
  brand,
  link,
}) => {
  const [choice, setChoice] = useState(null); // null | "like" | "nope"
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const rotate = useTransform(
    () => `${rotateRaw.get() + (isFront ? 0 : index % 2 ? 6 : -6)}deg`
  );

  const handleDragEnd = useCallback(
    (_, info) => {
      if (Math.abs(info.offset.x) > 100) {
        setChoice(info.offset.x > 0 ? "like" : "nope");

        // Delay removal to show feedback first
        setTimeout(
          () => setCards((prev) => prev.filter((card) => card.id !== id)),
          500
        );
      }
    },
    [id, setCards]
  );

  return (
    <motion.div
      className="absolute h-[550px] w-[350px] rounded-lg shadow-xl"
      style={{ x, rotate }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      exit={{ x: x.get() > 0 ? 200 : -200 }}
    >
      <img
        src={source}
        alt="Swipe Card"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Like/Nope Indicators */}
      <div className="absolute top-2 w-full flex justify-around">
        {choice && (
          <div className="image">
            <motion.img
              src={`${choice}.svg`}
              className="block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
          </div>
        )}
      </div>

      {/* Bottom Action Buttons */}
      <div className="description absolute bottom-[75px]">
        <p className="name font-bold text-white text-[40px] ml-4 -mb-2">
          {name},<span className="text-[25px]"> ${price}</span>
        </p>
        <p className="text-white ml-4 text-[20px] flex">
          {brand}
          <img src="verified.png" className="ml-1" />
        </p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-around">
        <img src="cross.svg" />
        <button className="shop text-2xl font-bold bg-white rounded-full px-2 py-4 h-max w-25">
          <a href={link}>Shop</a>
        </button>
        <img src="like-button.svg" />
      </div>
    </motion.div>
  );
};

export default SwipeCards;
