import { defineStore } from "pinia";
import { ref, watch } from "vue";

export type Player = {
  name: string;
  avatar?: string;
  penaltyLevel?: PenaltyLevel;
};

export const PENALTY_LEVELS = ["low", "default", "high"] as const;
export type PenaltyLevel = (typeof PENALTY_LEVELS)[number];

enum LocaleStoreKey {
  NAME = "playerName",
  PENALTY_LEVEL = "playerPenaltyLevel",
}

const loadStoredUser = (): Player | undefined => {
  const name = localStorage.getItem(LocaleStoreKey.NAME) || "";
  if (!name) return;

  const penaltyLevel = localStorage.getItem(LocaleStoreKey.PENALTY_LEVEL) || "";

  return {
    name,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    penaltyLevel: PENALTY_LEVELS.includes(penaltyLevel as any)
      ? (penaltyLevel as PenaltyLevel)
      : "default",
  };
};

export const usePlayerStore = defineStore("player", () => {
  const player = ref<Player | undefined>(loadStoredUser());

  const update = (value: Player) => {
    player.value = value;
  };

  watch(player, (newPlayer) => {
    if (!newPlayer) return;
    localStorage.setItem(LocaleStoreKey.NAME, newPlayer.name);
    if (newPlayer.penaltyLevel) {
      localStorage.setItem(
        LocaleStoreKey.PENALTY_LEVEL,
        newPlayer.penaltyLevel
      );
    }
  });

  return { player, update };
});
