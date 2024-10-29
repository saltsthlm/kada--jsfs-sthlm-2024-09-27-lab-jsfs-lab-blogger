import express from "express";
import path from "path";
import fs from "fs/promises";
export const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.get("/entries/:fileName", async (req, res) => {
  try {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, "../entries", fileName);
    const data = await fs.readFile(filePath, "utf-8");
    res.json({ content: data });
  } catch (error) {
    res.status(404).send("File not found");
  }
});
