const req = require("supertest");
const app = require("../../src/app");

const connection = require("../../src/database/connection");

describe('ONG', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const res = await req(app).post('/ongs').send({
            name: "Teste 3",
            email: "teste3@teste.com.br",
            whatsapp: "(88) 88888-8890",
            city: "Cidade",
            uf: "TE"
        });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});