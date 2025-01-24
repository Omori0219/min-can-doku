import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        app: {
          text: {
            primary: "#004835", // メインテキスト（投稿本文、ドキュメント本文）
            secondary: "#4A5568", // 補足情報（返信数、投稿時間）
            heading: "#004835", // 見出し、タイトル
            muted: "#718096", // より控えめなテキスト
          },
          status: {
            success: "#48BB78", // 成功
            warning: "#ECC94B", // 警告
            error: "#F56565", // エラー
            info: "#4299E1", // 情報
          },
          action: {
            primary: "#004835", // メインのアクション
            hover: "#006347", // ホバー時
            disabled: "#A0AEC0", // 無効時
          },
          background: {
            base: "#FFFFFF", // 基本の背景色
            hover: "#F7FAFC", // ホバー時の背景色
            muted: "#EDF2F7", // より控えめな背景色
            icon: "#E2E8F0", // アイコン背景
          },
          border: {
            light: "#E2E8F0", // 軽いボーダー
            strong: "#CBD5E0", // 強調ボーダー
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "post-body": ["15px", { lineHeight: "1.5" }], // 投稿本文、地域名
        "post-caption": ["12px", { lineHeight: "1.5" }], // 日時、返信数
      },
      width: {
        icon: "38px", // アイコンサイズ
      },
      height: {
        icon: "38px", // アイコンサイズ
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["LXGW WenKai TC", "sans-serif"],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
