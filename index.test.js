const http = require('http');
const { server, requestHandler } = require('./index');

describe('Node Hello Server', () => {
  describe('requestHandler', () => {
    it('should return status code 200', () => {
      const req = {};
      const res = {
        statusCode: null,
        end: jest.fn(),
      };

      requestHandler(req, res);

      expect(res.statusCode).toBe(200);
    });

    it('should return "Hello Node!" message', () => {
      const req = {};
      const res = {
        statusCode: null,
        end: jest.fn(),
      };

      requestHandler(req, res);

      expect(res.end).toHaveBeenCalledWith('Hello Node!\n');
    });
  });

  describe('server', () => {
    let testServer;
    const testPort = 3001;

    beforeAll((done) => {
      testServer = server.listen(testPort, done);
    });

    afterAll((done) => {
      testServer.close(done);
    });

    it('should respond with Hello Node! on HTTP request', (done) => {
      http.get(`http://localhost:${testPort}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          expect(res.statusCode).toBe(200);
          expect(data).toBe('Hello Node!\n');
          done();
        });
      });
    });
  });
});
