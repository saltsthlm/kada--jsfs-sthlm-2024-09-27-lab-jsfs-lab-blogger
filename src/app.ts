// app.ts
import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import showdown from "showdown";

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/entries", express.static(path.resolve(__dirname, "../entries")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.get("/entries/:fileName", (req: Request, res: Response) => {
  const { fileName } = req.params;
  const filePath = path.resolve(__dirname, "../entries", `${fileName}.md`);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }

    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(data);

    res.send(`
      <html>
        <head><title>${fileName}</title></head>
        <body>
          <h1>${fileName}</h1>
          <div>${htmlContent}</div>
          <a href="/">Back to all posts</a>
        </body>
      </html>
    `);
  });
});

export default app;
