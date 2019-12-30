describe("demo", () => {
  describe("方法1", () => {
    context("场景1", () => {
      it("测试1", () => {
        before(() => {
          console.log("测试之前");
        });
        after(() => {
          console.log("测试之后");
        });
        beforeEach(() => {
          console.log("每个测试之前");
        });
        afterEach(() => {
          console.log("每个测试之后");
        });
      });
      it("测试2", () => {});
    });
  });
});
