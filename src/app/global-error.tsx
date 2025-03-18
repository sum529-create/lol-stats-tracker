"use client"; // Error boundaries must be Client Components
import { Link } from "lucide-react";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // 오류 발생 시 로깅 (실제 프로덕션에서는 오류 추적 서비스 사용 고려)
  useEffect(() => {
    console.error("Global error occurred:", error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-4xl">!</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                문제가 발생했습니다
              </h1>
              <p className="text-gray-600 mb-4">
                예상치 못한 오류가 발생했습니다.
              </p>
              {process.env.NODE_ENV === "development" && (
                <div className="my-4 p-3 bg-gray-100 rounded text-left">
                  <p className="text-sm text-gray-700 break-words">
                    {error.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => reset()}
                className="w-full py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              >
                다시 시도하기
              </button>
              <Link
                href="/"
                className="w-full py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
