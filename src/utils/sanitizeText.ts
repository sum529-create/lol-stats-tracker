// 정규식 태그 제거 유틸 함수
export default function itemDescription({
  description,
}: {
  description: string;
}) {
  const strippedText = description
    .replace(/<[^>]+>/g, "") // 1. HTML 태그 제거
    .replace(/\{\{[^}]+\}\}/g, "") // 2. {{ ... }} 형식의 토큰 제거
    .replace(/\s+/g, " ") // 3. 연속된 공백을 하나로 변환
    .trim();
  return strippedText;
}
