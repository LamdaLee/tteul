export type Project = {
  id: string; name: string; subtitle: string; description: string; category: string;
  stage: "활짝 핀" | "자라는 중"; status: string; theme: "pause" | "thought" | "work";
  url?: string; caseUrl: string; github?: string; story: string; note: string;
};

export const projects: Project[] = [
{id:'pause-ponder',name:'Pause & Ponder',subtitle:'적고, 멈추고, 되돌아보기.',description:'감정과 소비를 기록하고, 충동구매를 잠시 멈추는 개인 보조 도구.',category:'개인 기록',stage:'활짝 핀',status:'서비스 배포 완료',theme:'pause',url:'https://getpauseponder.com',caseUrl:'https://shaula.kr/case#pause-ponder',github:'https://github.com/LamdaLee/PP',story:'메모와 가계부가 바로 분류를 요구하면, 기록을 시작하는 일부터 피곤해집니다.\n\n먼저 적는 ‘마음함’과 충동 구매를 보류하는 ‘잠깐 두기’를 분리했습니다. 감정과 소비의 연결을 되돌아보며, 나에게 필요한 선택을 할 수 있도록 돕는 도구입니다.',note:'AI가 분류 후보를 제안하고, 사람이 확인합니다. 합계는 규칙에 따라 계산하도록 책임을 나눴습니다.'},
{id:'byeolieum',name:'별이음',subtitle:'흩어진 생각을 이어, 나만의 그림으로.',description:'생각을 연결하고, 아이디어를 제작 프롬프트와 작은 실험으로 이어가는 웹앱.',category:'생각과 창작',stage:'자라는 중',status:'프로토타입 · 개선 중',theme:'thought',url:'https://byeolieum.vercel.app',caseUrl:'https://shaula.kr/case/byeolieum',github:'https://github.com/LamdaLee/Byeolieum',story:'떠오른 생각은 쌓이지만, 서로 연결되지 않으면 실행할 아이디어가 되기 어렵습니다.\n\n생각 카드를 놓고 연결하며, 필요한 순간에 AI의 제안을 참고합니다. 아이디어가 제작 프롬프트와 직접 확인하는 작은 실험으로 이어지는 흐름을 만들고 있습니다.',note:'생각 카드 → 연결 → 선택적 AI 제안 → 제작 프롬프트 → 작은 실험.'},
{id:'work-experiment',name:'업무 활용 지점 찾기',subtitle:'막연한 AI 활용을, 첫 실험으로.',description:'6개의 질문으로 내 업무의 입력 자료, 원하는 결과, 검증 기준을 정리하는 도구.',category:'업무와 학습',stage:'활짝 핀',status:'shaula.kr에서 체험',theme:'work',url:'https://shaula.kr/try',caseUrl:'https://shaula.kr/try',story:'‘내 업무에 AI를 써보고 싶다’는 마음이 있어도 어디서 시작할지 막막할 수 있습니다.\n\n6개의 질문으로 작업 장면, 입력 자료, 원하는 결과, AI에 맡길 일과 직접 확인할 것을 정리합니다. 완성한 계획은 사용하는 AI 서비스에서 시험할 요청문으로 바꿀 수 있습니다.',note:'이 도구는 계획과 요청문을 정리합니다. 실제 AI 대화는 사용하는 AI 서비스에서 진행합니다.'}
];

export function filterProjects(stage: string, query: string) {
  const keyword = query.trim().toLowerCase();
  return projects.filter(project =>
    (stage === "전체" || project.stage === stage) &&
    [project.name, project.description, project.category, project.subtitle]
      .join(" ").toLowerCase().includes(keyword)
  );
}
