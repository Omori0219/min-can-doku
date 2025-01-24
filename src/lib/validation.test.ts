import { validateContent, MAX_CONTENT_LENGTH } from "./validation";

describe("validateContent", () => {
  it("空の文字列の場合はエラーを返す", () => {
    expect(validateContent("")).toBe("投稿内容を入力してください");
  });

  it("最大文字数を超える場合はエラーを返す", () => {
    const content = "漢".repeat(MAX_CONTENT_LENGTH + 1);
    expect(validateContent(content)).toBe(`投稿内容は${MAX_CONTENT_LENGTH}文字以内で入力してください`);
  });

  it("許可されていない文字が含まれる場合はエラーを返す", () => {
    expect(validateContent("こんにちは")).toBe("漢字、アルファベット、基本的な記号のみ使用できます");
    expect(validateContent("ｶﾀｶﾅ")).toBe("漢字、アルファベット、基本的な記号のみ使用できます");
  });

  it("漢字のみの場合は成功", () => {
    expect(validateContent("漢字")).toBeNull();
  });

  it("アルファベットのみの場合は成功", () => {
    expect(validateContent("hello")).toBeNull();
  });

  it("記号のみの場合は成功", () => {
    expect(validateContent("!?.,:")).toBeNull();
  });

  it("漢字とアルファベットと記号の組み合わせの場合は成功", () => {
    expect(validateContent("漢字 and 記号!?")).toBeNull();
  });

  it("繁体字の場合は成功", () => {
    expect(validateContent("漢字")).toBeNull();
  });

  it("簡体字の場合は成功", () => {
    expect(validateContent("汉字")).toBeNull();
  });
});
