/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertElement } from "@/helpers/API";
import { IDataNpc } from "@/types/model";

function getColorEle(ele: string, status: string | null) {
  if (status === "X") {
    return `background:rgb(48, 45, 45);color: white; font-size:10px;`;
  }

  switch (ele) {
    case "Hỏa":
      return `bg-[#ec3e4c]`;
    case "Địa":
      return `bg-[#797518]`;
    case "Thủy":
      return `bg-[#33a1eb]`;
    case "Phong":
      return `bg-[#26973e]`;
    case "Tâm":
      return `bg-[#e63ddd]`;
    default:
      return `bg-[#9b9b9b] text-black`;
  }
}

function Battle() {
  const dataBattle: IDataNpc[] = [
    {
      id: 1,
      name: "Tiger Soldier",
      hp: 3200,
      element: 1,
      slotBattle: 1,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 2,
      name: "Tiger Soldier",
      hp: 3200,
      element: 2,
      slotBattle: 2,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 3,
      name: "Tiger Soldier",
      hp: 3200,
      element: 3,
      slotBattle: 3,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 4,
      name: "Tiger Soldier",
      hp: 3200,
      element: 4,
      slotBattle: 4,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 5,
      name: "Tiger Soldier",
      hp: 3200,
      element: 5,
      slotBattle: 5,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 6,
      name: "Tiger Soldier",
      hp: 3200,
      element: 1,
      slotBattle: 6,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 7,
      name: "Tiger Soldier",
      hp: 3200,
      element: 0,
      slotBattle: 7,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 8,
      name: "Tiger Soldier",
      hp: 3200,
      element: 0,
      slotBattle: 8,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 9,
      name: "Tiger Soldier",
      hp: 3200,
      element: 0,
      slotBattle: 9,
      status: "live",
      buff: null,
      def: null,
    },
    {
      id: 10,
      name: "Tiger Soldier",
      hp: 3200,
      element: 0,
      slotBattle: 10,
      status: "live",
      buff: null,
      def: null,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-5 gap-1 px-1">
        {dataBattle.map((item) => {
          const colorNPC =
            getColorEle(convertElement(item.element), item.status) +
            " text-white text-sm rounded-md p-1 flex justify-between items-center flex-col";
          return (
            <div className={colorNPC} key={item.id}>
              <div className="font-bold">
                {item.id}.{item.name}
              </div>
              <div>
                {item.hp} | {item.status}
              </div>
              <div>
                {item.buff} | {item.def}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Battle;
