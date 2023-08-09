import { Data } from "./data.model";

// DROPDOWN ELEMENT DATA MODEL (COMPATIBLE WITH BACKEND)
export interface DropdownState {
    data: Data[];
    loading: boolean;
    focusId: string;
}