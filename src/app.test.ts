// tests/app.test.ts
import request from "supertest";
import { app } from "../src/app";

describe("GET /entries/:fileName", () => {
  it("should return 200 and the content of the file when the file exists", async () => {
    const response = await request(app).get("/entries/mochareporters.md");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("content");
    expect(response.body.content).toContain("I’ve been tipping a few mobs of this thing");
  });

  it("should return 404 if the file does not exist", async () => {
    const response = await request(app).get("/entries/non-existent-file.md");
    expect(response.status).toBe(404);
    expect(response.text).toBe("File not found");
  });
});
