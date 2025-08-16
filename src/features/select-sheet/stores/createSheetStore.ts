import { writable } from "svelte/store";
import type { ResumeSheet } from "../model/resumeSheet";
import { getSheets } from "../services/sheetsService";

export const showModal = writable(false);
export const sheetsStore = writable<Promise<ResumeSheet[]>>();

export function closeModal(){
  showModal.set(false);
}

export function openModal(){
  showModal.set(true);
}

export async function refreshSheets(){
  sheetsStore.set(getSheets());
}
