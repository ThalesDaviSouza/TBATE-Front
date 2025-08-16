import { getAuthorized } from "../../../shared/services/requestBaseService";
import type { ResumeSheet } from "../model/resumeSheet";

export async function getSheets() : Promise<ResumeSheet[]>{
  const response = await getAuthorized('/sheets/');
  const sheets = await response.json();
  
  return sheets.sheets;
}