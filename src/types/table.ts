import { DisabledStudent, Supporter } from "./user";

export interface CustomTableMeta {
  onMatchingStart: (student: DisabledStudent, supporters: Supporter[]) => void;
  onMatchingEdit?: (student: DisabledStudent) => void;
  onMatchingCancel?: (student: DisabledStudent) => void;
  supporters: Supporter[];
}