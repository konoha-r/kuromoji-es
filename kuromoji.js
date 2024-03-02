import { TokenizerBuilder } from "./src/TokenizerBuilder.js";
import { DictionaryBuilder } from "./src/dict/builder/DictionaryBuilder.js";

const DIC_URL = "https://code4fukui.github.io/kuromoji-es/dict/";

export const kuromoji = {
  builder: function (option) {
      return new TokenizerBuilder(option);
  },
  dictionaryBuilder: function () {
      return new DictionaryBuilder();
  },
  createTokenizer: async () => {
    return new Promise((resolve, reject) => {
      kuromoji.builder({ dicPath: DIC_URL }).build((err, tokenizer) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokenizer);
      });
    });
  }
};


