export type Effect = {
  name: string,
  actions: Action[]
}

export type Action = {
  label: string,
  type: ActionType,
  value: string,
  applysOn: ActionApplysOn,
  duration: string, // Pode ser uma roll formula
  target: ActionTarget,
  cust?: string // Pode ser roll formula
}

export enum ActionType {
  RollFormula,
  text
}

export enum ActionApplysOn {
  all,
  modifier,
  rollBtn
}

export enum ActionTarget {
  self,
  another
}