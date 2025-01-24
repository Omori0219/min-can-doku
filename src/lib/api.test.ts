import { createPost, getPosts, getReplies, getReplyCount } from "./api";
import { supabase } from "./supabase";

// モックの型定義
type MockReturnValue = {
  data: unknown;
  error: Error | null;
};

type MockChain = {
  insert: jest.Mock;
  select: jest.Mock;
  single: jest.Mock;
  is: jest.Mock;
  eq: jest.Mock;
  in: jest.Mock;
  groupBy: jest.Mock;
  order: jest.Mock;
  limit: jest.Mock;
};

// モック関数を作成するヘルパー関数
const createMockChain = (returnValue: MockReturnValue): jest.Mock => {
  const chain: MockChain = {
    insert: jest.fn(),
    select: jest.fn(),
    single: jest.fn(),
    is: jest.fn(),
    eq: jest.fn(),
    in: jest.fn(),
    groupBy: jest.fn(),
    order: jest.fn(),
    limit: jest.fn(),
  };

  // チェーンメソッドの設定
  chain.insert.mockReturnValue(chain);
  chain.select.mockReturnValue(chain);
  chain.is.mockReturnValue(chain);
  chain.eq.mockReturnValue(chain);
  chain.in.mockReturnValue(chain);
  chain.order.mockReturnValue(chain);

  // 終端メソッドの設定
  chain.single.mockResolvedValue(returnValue);
  chain.groupBy.mockResolvedValue(returnValue);
  chain.limit.mockResolvedValue(returnValue);
  chain.order.mockResolvedValue(returnValue);

  const mockFn = jest.fn(() => chain);
  return mockFn;
};

jest.mock("./supabase", () => ({
  supabase: {
    from: jest.fn(),
  },
}));

describe("API関数", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createPost", () => {
    it("投稿を作成できる", async () => {
      const mockPost = {
        id: "1",
        content: "テスト投稿",
        region: "日本",
        parent_id: null,
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-01T00:00:00Z",
      };

      const mockFrom = createMockChain({
        data: mockPost,
        error: null,
      });
      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const result = await createPost({
        content: "テスト投稿",
        region: "日本",
      });

      expect(result).toEqual(mockPost);
      expect(supabase.from).toHaveBeenCalledWith("posts");
    });

    it("エラーが発生した場合はエラーをスローする", async () => {
      const mockFrom = createMockChain({
        data: null,
        error: new Error("エラー"),
      });
      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      await expect(
        createPost({
          content: "テスト投稿",
          region: "日本",
        })
      ).rejects.toThrow();
    });
  });

  describe("getPosts", () => {
    it("投稿一覧を取得できる", async () => {
      const mockPosts = [
        {
          id: "1",
          content: "テスト投稿1",
          region: "日本",
          parent_id: null,
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z",
        },
        {
          id: "2",
          content: "テスト投稿2",
          region: "中国",
          parent_id: null,
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z",
        },
      ];

      const mockFrom = createMockChain({
        data: mockPosts,
        error: null,
      });
      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const result = await getPosts();

      expect(result).toEqual(mockPosts);
      expect(supabase.from).toHaveBeenCalledWith("posts");
    });
  });

  describe("getReplies", () => {
    it("返信を取得できる", async () => {
      const mockReplies = [
        {
          id: "3",
          content: "返信1",
          region: "日本",
          parent_id: "1",
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z",
        },
      ];

      const mockFrom = createMockChain({
        data: mockReplies,
        error: null,
      });
      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const result = await getReplies("1");

      expect(result).toEqual(mockReplies);
      expect(supabase.from).toHaveBeenCalledWith("posts");
    });
  });

  describe("getReplyCount", () => {
    it("返信数を取得できる", async () => {
      const mockCounts = [
        { parent_id: "1", count: 2 },
        { parent_id: "2", count: 1 },
      ];

      const mockFrom = createMockChain({
        data: mockCounts,
        error: null,
      });
      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const result = await getReplyCount(["1", "2"]);

      expect(result).toEqual({ "1": 2, "2": 1 });
      expect(supabase.from).toHaveBeenCalledWith("posts");
    });
  });
});
