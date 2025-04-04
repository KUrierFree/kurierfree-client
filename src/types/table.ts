import { DisabledStudent, Supporter } from "./user";

export interface CustomTableMeta {
  onMatchingStart: (student: DisabledStudent) => void;
  onMatchingEdit?: (student: DisabledStudent, supporter: Supporter) => void;
  onMatchingCancel?: (student: DisabledStudent, supporter: Supporter) => void;
}