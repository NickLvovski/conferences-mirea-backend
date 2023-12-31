import { makeAutoObservable } from "mobx";
import { $api } from "./api";

type UniqueId = number;
type ProgramDependency = number;

export interface ProgramsInterface {
  id: UniqueId;
  info: boolean;
  infoOpened: false;
  date: string;
  time: string;
  title: string;
  where: string;
}

export interface ProgramsInfoInterface {
  id: UniqueId;
  img: string;
  fio: string;
  programlistId: ProgramDependency;
}

export interface ProgramInterface {
  program: {
    programs: ProgramsInterface[];
    programsInfo: ProgramsInfoInterface[];
  };
}

class programState {
  constructor() {
    makeAutoObservable(this);
  }

  async getProgram() {
    try {
      let response = await $api.get<ProgramInterface>("/admin/program");
    } catch (e) {
      console.log(e)
    }
  }
}

export default new programState();
