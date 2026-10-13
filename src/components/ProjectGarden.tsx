"use client";

import { useEffect, useRef, useState } from "react";
import { filterProjects, type Project } from "../lib/projects";
import { ProjectPreview } from "./ProjectPreview";

const stages = ["전체", "활짝 핀", "자라는 중"] as const;

export function ProjectGarden() {
  const [stage, setStage] = useState<string>("전체");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const list = filterProjects(stage, query);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey &&
          !(target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) &&
          !dialogRef.current?.open) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function openProject(project: Project) {
    setSelected(project);
    dialogRef.current?.showModal();
  }

  return <>
    <section id="projects" className="discover">
      <div className="section-top">
        <div><p className="eyebrow">IN THE GARDEN</p><h2>뜰에서 자라는 것들 <span>↘</span></h2></div>
        <label className="search"><span aria-hidden="true">⌕</span><input ref={searchRef} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="프로젝트 또는 키워드 찾기" aria-label="프로젝트 검색" /><kbd>/</kbd></label>
      </div>
      <div className="toolbar">
        <div className="filters">{stages.map(item => <button key={item} onClick={() => setStage(item)} className={item === stage ? "active" : ""} aria-pressed={item === stage}>{item === "활짝 핀" ? "✳ " : item === "자라는 중" ? "♧ " : ""}{item}</button>)}</div>
        <span className="small-note">작은 도구 · 웹앱 · 생각의 실험</span>
      </div>
      <div className="results-meta"><span aria-live="polite">{list.length}개의 프로젝트</span><span>프로젝트를 눌러 만든 이야기를 읽어보세요</span></div>
      <div className="projects">{list.map(project => <article key={project.id} className="card">
        <ProjectPreview project={project} />
        <div className="card-content">
          <div className="card-top"><span>{project.category}</span><span className={`tag ${project.stage === "활짝 핀" ? "bloom" : "grow"}`}>{project.status}</span></div>
          <h3><button className="project-title" onClick={() => openProject(project)}>{project.name} <span aria-hidden="true">↗</span></button></h3>
          <p className="subtitle">{project.subtitle}</p><p className="card-description">{project.description}</p>
          <div className="card-bottom"><span>by Shaula</span><button onClick={() => openProject(project)} className="story-button" aria-label={`${project.name} 만든 이야기`}>만든 이야기 <span>→</span></button></div>
        </div>
      </article>)}</div>
      {list.length === 0 ? <div className="empty"><h3>아직 이곳에 심어진 프로젝트가 없어요.</h3><p>다른 키워드나 단계를 살펴보세요.</p><button className="outline" onClick={() => { setStage("전체"); setQuery(""); }}>전체 프로젝트 보기</button></div> : null}
    </section>
    <dialog ref={dialogRef} className="detail-dialog" aria-labelledby="detail-title" onClose={() => setSelected(null)} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
    }}>
      <div className="dialog-top"><span className="eyebrow">FROM THE GARDEN</span><button className="close" onClick={() => dialogRef.current?.close()} aria-label="닫기" autoFocus>×</button></div>
      {selected ? <div id="detail">
        <ProjectPreview project={selected} />
        <div className="detail-meta">{selected.category} · {selected.status}</div>
        <h2 id="detail-title">{selected.name}</h2><p className="detail-subtitle">{selected.subtitle}</p>
        <p className="detail-story">{selected.story}</p><div className="detail-note">{selected.note}</div>
        <div className="detail-actions">
          {selected.url ? <a className="dark" href={selected.url} target="_blank" rel="noopener noreferrer">직접 써보기 ↗</a> : null}
          {selected.caseUrl !== selected.url ? <a className="outline" href={selected.caseUrl} target="_blank" rel="noopener noreferrer">제작 이야기 읽기 ↗</a> : null}
          {selected.github ? <a className="outline" href={selected.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a> : null}
        </div>
      </div> : null}
    </dialog>
  </>;
}
