import fs from "fs";

export const readFileAsync = async (path: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};
