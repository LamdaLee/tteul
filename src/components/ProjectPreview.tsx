import Image from "next/image";
import type { Project } from "../lib/projects";

export function ProjectPreview({ project }: { project: Project }) {
  if (project.theme === "pause") return (
    <div className="preview pause">
      <span className="preview-label">PAUSE &amp; PONDER</span>
      <Image src="/assets/pause-ponder.png" alt="Pause & Ponder의 마음함 기록 화면" width={1144} height={941} sizes="(max-width: 620px) 80vw, (max-width: 900px) 40vw, 310px" />
    </div>
  );
  if (project.theme === "thought") return (
    <div className="preview thought" aria-label="생각 카드가 연결되는 모아틀의 흐름">
      <span className="preview-label">CONNECT YOUR THOUGHTS</span>
      <div className="thought-line" />
      <div className="thought-card t1"><small>문득 떠오른 생각</small><strong>이런 도구가 있으면?</strong></div>
      <div className="thought-card t2"><small>작은 연결</small><strong>생각에서 아이디어로</strong></div>
      <div className="thought-card t3"><small>다음 한 걸음</small><strong>직접 만들어보기 ↗</strong></div>
      <span className="thought-dot" />
    </div>
  );
  return (
    <div className="preview work">
      <span className="preview-label">YOUR FIRST AI EXPERIMENT</span>
      <div className="work-sheet">
        <div className="sheet-top">나의 첫 실험 카드 <span>↗</span></div>
        <p><i>01</i> 어떤 일을 바꾸고 싶나요?</p><div className="sheet-line" />
        <p><i>02</i> 무엇이 나오면 도움이 될까요?</p><div className="sheet-line short" />
        <span className="sheet-pill">작게 시작해보기 →</span>
      </div>
    </div>
  );
}
