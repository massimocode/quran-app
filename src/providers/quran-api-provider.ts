import { Surah, Verse } from "../services/content-service";

export abstract class QuranApiProvider {
  abstract getSurahs(): Promise<Surah[]>;
  abstract getVerses(surahId: number): Promise<Verse[]>;
}

export class StubQuranApiProvider implements QuranApiProvider {
  async getSurahs(): Promise<Surah[]> {
    return [
      {
        id: 1,
        name: "Fatiha",
        displayBismillah: false
      },
      {
        id: 2,
        name: "Baqarah",
        displayBismillah: true
      }
    ];
  }
  async getVerses(surahId: number): Promise<Verse[]> {
    if (surahId === 1) {
      return [
        { id: 1, text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
        { id: 2, text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" }
      ];
    }
    if (surahId === 2) {
      return [
        { id: 1, text: "الم" },
        {
          id: 2,
          text: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ"
        }
      ];
    }
    throw new Error(`Surah with ID ${surahId} not found`);
  }
}
