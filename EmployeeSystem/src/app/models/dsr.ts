import { DSRTaskEntry } from "./dsr-task-entry";


export interface DSR {
  userId?: string;
  date?: string;
  entries: DSRTaskEntry[];
}