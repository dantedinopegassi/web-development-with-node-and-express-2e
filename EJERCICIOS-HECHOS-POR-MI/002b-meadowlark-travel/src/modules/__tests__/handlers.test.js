const handlers = require("../handlers");

/********************************************   /
/   our primary dependency is Express,          /
/   which is already thoroughly tested,         /
/   so we don’t need or want to test            /
/   Express itself, just                        /
/   how we use it. The only way we can          /
/   determine if we’re using Express correctly  /
/   is to simulate Express itself.              /
/   The routes we currently have (the home      /
/   page, About page, 404 page, and 500 page)   /
/   are pretty difficult to test because        /
/   they assume three dependencies on Express:  /
/   they assume we have an Express app (so we   /
/   can have app.get), as well as request and   /
/   response objects. Fortunately, it’s         /
/   pretty easy to eliminate the dependence on  /
/   the Express app itself                      /
/   ********************************************/

test("home page renders", () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.home(req, res);
    expect(res.render.mock.calls[0][0]).toBe("home");
});

test("about page plus fortune", () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("about");
    expect(res.render.mock.calls[0][1]).toEqual(
        expect.objectContaining({
            fortune: expect.stringMatching(/\W/),
        })
    );
});

test("a ver si anda el 404", () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("404");
});

test("a ver si anda el 500", () => {
    const err = new Error('kgste');
    const req = {};
    const res = { render: jest.fn() };
    const next = jest.fn();
    handlers.serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe("500");
});
