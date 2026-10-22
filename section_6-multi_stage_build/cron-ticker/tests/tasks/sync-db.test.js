const { syncDB } = require("../../tasks/sync-db");

describe("Prueba en Sync-DB", () => {
  test("Dede de ejecutar el proceso 2 veces", () => {
    syncDB();
    const times = syncDB();
    // console.log(times);

    expect(times).toBe(2);
  });
});
