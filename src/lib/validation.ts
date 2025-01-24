// 許可する文字のパターン
const ALLOWED_CHARS_PATTERN = /^[一-龯㐀-䶵一-鿕豈-頻並-龎a-zA-Z0-9!?.,;:()\[\]{}<>+\-*/%&#@$、。〃〄々〆〇〡-〩〸-〻㍐-㍗㎀-㏿！？．，；：（）［］｛｝＜＞＋－＊／％＆＃＠＄\s]+$/;

// 最大文字数
export const MAX_CONTENT_LENGTH = 140;

/**
 * 投稿内容のバリデーション
 * @param content 投稿内容
 * @returns エラーメッセージ（バリデーションOKの場合はnull）
 */
export const validateContent = (content: string): string | null => {
  if (!content) {
    return "投稿内容を入力してください";
  }

  if (content.length > MAX_CONTENT_LENGTH) {
    return `投稿内容は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
  }

  if (!ALLOWED_CHARS_PATTERN.test(content)) {
    return "漢字、アルファベット、記号のみ使用できます";
  }

  return null;
};
