import type { Effect } from "./effect"
import type { Tab } from "./tab"

export type Sheet = {
  charactherName: string,
  description: string,
  tabs: Tab[],
  effects: Effect[]
} 