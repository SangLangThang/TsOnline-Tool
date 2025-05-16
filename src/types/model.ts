/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpstreamContext } from "node-tcp-proxy";

export interface IDataServer {
  host: string;
  portIn: number;
  portOut: number;
  hostFake: string;
}

export interface IRemotePort {
  id: number;
  port: number;
}

export interface IAccount {
  // basic info
  currentMapId: number;
  context?: UpstreamContext;
  id: number;
  lv: number;
  bag: IBagItem[];
  connectByTool: boolean;
  remotePort: number | null;
  autoAcceptParty: boolean;

  // for warp
  listWarp: number[];
  isWarping: boolean;
  stepWarp: number;
  dataStepsWarp: any[];

  // for talk
  isTalking: boolean;
  isFinishDialog: boolean;
  isCase8: boolean;
  isSendEnd: boolean;
  stepMenu: number;

  // for battle
  isBattle: boolean;

  // for auto-q
  onAuto: boolean;
  typeEvent: string;
  dataStepsQ: any[];
  stepQ: number;
  dataQ: string;
  listquest_Doing: any[];
  listquest_Done: any[];

  // for create char
  isCreateChar: boolean;

  // for DT
  dataDT: number[];
  checkAutoDaTau: boolean;
  clearDT: number;
  passDT: number;
  finishDT: string;
  interval: any;
  isBack: boolean;
  pickItemFinish: boolean;
  getAgainQ: boolean;
  useTQ: boolean;
  isTrainLevel: boolean;
  lvPet: number;
  lvPetMax: number;
  isMix: boolean;
  slotMix: number;
  skillTrain: number;
  skillGate: number;
  fakeTienVu: boolean;
  changeGemPet: boolean;
  changeGemChar: boolean;
  hoisinhChar: boolean;
  hoisinhPet: boolean;
  skillNormalChar: number;
  skillSoloChar: number;
  skillSpecialChar: number;
  skillCCChar: number;
  skillBuffChar: number;
  skillNormalPet: number;
  skillSoloPet: number;
  skillSpecialPet: number;
  skillCCPet: number;
  skillBuffPet: number;
  slotBattleChar: number;
  slotBattlePet: number;
  team: number[];
  freeHand: boolean;
  m_f: string;
  goToPkMap: string;

  listPet: IPetInfo[];
  npcInBattle: IDataNpc[];
  memberInBattle: IAccountInfo[];
  countSendAttack: number;
  charInfo: IAccountInfo;
  petInfo: IPetInfo;
  havePetEvent: boolean;
  finishQuest: boolean;
  countPT: number;
  countHavePet: number;
  isCatchingPet: boolean;
  idTrade: number[];
}

export interface IBagItem {
  slot: number;
  id: number;
  sl: number;
  name: string;
  type: string;
}

export interface IDataNpc {
  id: number;
  name: string;
  slotBattle: number;
  hp: number;
  element: number | null;

  willReceivecCC?: boolean;
  status: string | null;
  buff: string | null;
  def: string | null;
}

export interface IPetInfo extends IDataNpc {
  brokenTG: boolean;
  idDacthu: number;
  isChangeGem: boolean;
  slot: number;
}

export interface IAccountInfo extends IDataNpc {
  brokenTG: boolean;
  idDacthu: number;
  isChangeGem: boolean;
}

const createBags = () => {
  const bags = new Array(26)
    .fill({
      id: 0,
      sl: 0,
    })
    .map((e, index) => ({ slot: index, ...e }));
  bags[0] = {
    id: 999999999,
    sl: 999999999,
  };
  return bags;
};

export function createDataAccount(): IAccount {
  const account: IAccount = {
    // basic info
    currentMapId: 0,
    context: undefined,
    id: 0,
    lv: 0,
    bag: createBags(),
    connectByTool: false,
    remotePort: null,
    autoAcceptParty: false,

    // for warp
    listWarp: [],
    isWarping: false,
    stepWarp: 0,
    dataStepsWarp: [],

    // for talk
    isTalking: false,
    isFinishDialog: false,
    isCase8: false,
    isSendEnd: false,
    stepMenu: 0,

    // for battle
    isBattle: false,

    // for auto-q
    onAuto: false,
    typeEvent: "",
    dataStepsQ: [],
    stepQ: 0,
    dataQ: "",
    listquest_Doing: [],
    listquest_Done: [],

    // for create char
    isCreateChar: false,

    // for DT
    dataDT: [],
    checkAutoDaTau: false,
    clearDT: 0,
    passDT: 0,
    finishDT: "",
    interval: null,
    isBack: false,
    pickItemFinish: false,
    getAgainQ: false,
    useTQ: false,
    isTrainLevel: false,
    lvPet: 0,
    lvPetMax: 0,
    isMix: false,
    slotMix: 0,
    skillTrain: 0,
    skillGate: 0,
    fakeTienVu: false,
    changeGemPet: false,
    changeGemChar: false,
    hoisinhChar: false,
    hoisinhPet: false,
    skillNormalChar: 0,
    skillSoloChar: 0,
    skillSpecialChar: 0,
    skillCCChar: 0,
    skillBuffChar: 0,
    skillNormalPet: 0,
    skillSoloPet: 0,
    skillSpecialPet: 0,
    skillCCPet: 0,
    skillBuffPet: 0,
    slotBattleChar: 0,
    slotBattlePet: 0,
    team: [],
    freeHand: false,
    m_f: "",
    goToPkMap: "",

    listPet: [],
    npcInBattle: [],
    memberInBattle: [],
    countSendAttack: 0,
    charInfo: {
      status: "",
      buff: "",
      def: "",
      brokenTG: false,
      element: null,
      idDacthu: 0,
      isChangeGem: false,
      slotBattle: 0,
      hp: 0,
      id: 0,
      name: "",
    },
    petInfo: {
      id: 0,
      status: null,
      buff: null,
      def: null,
      brokenTG: false,
      element: null,
      idDacthu: 0,
      isChangeGem: false,
      slotBattle: 0,
      slot: 0,
      hp: 0,
      name: "",
    },

    havePetEvent: false,
    finishQuest: false,
    countPT: 0,
    countHavePet: 0,
    isCatchingPet: false,
    idTrade: [],
  };
  return account;
}

export interface IEvent {
  id: string;
  name: string;
}
