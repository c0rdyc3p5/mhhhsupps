export interface Consumer {
  name: string;
  mSuppsPerHour: number;
  inventory: number;
  timeUntilEmpty: number;
}

export interface ConsumerCalculatedHours extends Consumer {
  suppsToAddForWantedRunningTime?: number,
  newTimeUntilEmpty?: number
}

export interface ConsumerCalculatedOptimized extends Consumer {
  suppsToAddForEqualization?: number,
  suppsToAddForOptimization?: number,
  newTimeUntilEmpty?: number
}
