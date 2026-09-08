export interface MacroeconomicKpi {
  title: string;
  value: string;
  context: string;
  explanation: string;
  source: string;
}

export type ThreeItems<T> = [T, T, T];

export interface HighlightedNote {
  before: string;
  highlight: string;
  after: string;
}

export interface StrategicObserveBlock {
  summary: string;
  notes: ThreeItems<string>;
}
