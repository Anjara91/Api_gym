const supertest = require("supertest");
const server = require("../index");

//configuración
const api = supertest(server);

describe("GET /client/getName", ()=>{
    /* 1.-Verificar el código de respuesta es 200
       2.-Verificar el formato es json
       3.-Verificar si la respuesta tiene un array
       4.-Verificar si cada objeto del array es un cliente
    */
   test("retornar array de clientes", async () => {
    // simular la peticion al servirdor
    const response = await api.get("/client/getName?name=paula");

    //código respuesta es 200
    expect(response.status).toBe(200);

    //formato es json
    expect(response.headers["content-type"]).toMatch(/json/);

    //tiene un array
    expect(Array.isArray(response.body)).toBe(true);
   });
});