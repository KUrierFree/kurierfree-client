import type { DisabledStudent } from "./user";

export interface CustomTableMeta {
  onMatchingStart: (student: DisabledStudent) => void;
  onMatchingEdit?: (student: DisabledStudent) => void;
  onMatchingCancel?: (student: DisabledStudent) => void;
}