import { JSDOM } from "jsdom";
import request from "supertest";
import { app } from "./app";

describe("GET /entries/:fileName", () => {
  it("should return 200 and the content of the file when the file exists", async () => {
    const response = await request(app).get("/entries/mochareporters.md");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("content");
    expect(response.body.content).toContain(
      "I’ve been tipping a few mobs of this thing",
    );
  });

  it("should return 404 if the file does not exist", async () => {
    const response = await request(app).get("/entries/non-existent-file.md");
    expect(response.status).toBe(404);
    expect(response.text).toBe("File not found");
  });
});

describe("DOM Testing with JSDOM", () => {
  it("should render list items for blog entries", () => {
    const htmlContent = `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Salt Blogger</title>
      </head>
      <body style="padding: 2rem 4rem">
        <h1 style="margin-bottom: 3rem">Salt Blogger</h1>
        <ul id="blogslist" data-testid="blogslist">
          <li><a href="#" onclick="fetchMarkdown('failOnlyOneTest.md')">failOnlyOneTest.md</a></li>
          <li><a href="#" onclick="fetchMarkdown('mochareporters.md')">mochareporters.md</a></li>
          <li><a href="#" onclick="fetchMarkdown('saveyourfingers-1.md')">saveyourfingers-1.md</a></li>
          <li><a href="#" onclick="fetchMarkdown('saveyourfingers-2.md')">saveyourfingers-2.md</a></li>
        </ul>
      </body>
      </html>
    `;

    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const blogslist = document.getElementById("blogslist");

    expect(blogslist).not.toBeNull();
    expect(blogslist?.children.length).toBe(4);
    expect(blogslist?.children[0].textContent).toBe("failOnlyOneTest.md");
    expect(blogslist?.children[2].textContent).toBe("saveyourfingers-1.md");
  });
});
