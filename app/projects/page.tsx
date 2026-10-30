import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: 'プロジェクト',
  description:
    'Albus. が開発する大学祭向けサービスの一覧。迷子・落とし物の情報をWebで確認できる「迷子・落とし物サイト」や、実行委員の用語理解を助ける「大学祭用語集」を紹介します。',
  path: '/projects',
});

type Project = {
  title: string;
  status: 'live' | 'building';
  audience: string;
  summary: string;
  features: string[];
  tags: string[];
  // サービスの画面（public/projects/ に置く。width / height は元画像のピクセル数）
  image?: { src: string; width: number; height: number; alt: string };
};

const statusLabel: Record<Project['status'], string> = {
  live: '運用中',
  building: '開発中',
};

// 新しいプロジェクトは先頭に追加する
const projects: Project[] = [
  {
    title: '迷子・落とし物サイト',
    status: 'building',
    audience: '来場者・実行委員向け',
    summary:
      '立て看板などの掲示で案内してきた迷子・落とし物の情報を、Webで確認できるようにするサービスです。来場者は自分で情報を探せるようになり、実行委員は専用画面から情報をまとめて管理できます。今年の大学祭で運用する予定です。',
    features: [
      '来場者は品名・色・場所から自分で探せる',
      '実行委員は専用画面から情報を登録・管理できる',
      '立て看板を減らし、掲示物の経費を圧縮',
      '1万人以上のアクセスに耐える設計',
    ],
    tags: ['Next.js', 'Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2'],
    image: {
      src: '/projects/lost-and-found.png',
      width: 2508,
      height: 1462,
      alt: '迷子・落とし物サイトのトップページ。品名・色・場所で検索する欄と、迷子の情報・落とし物を探すボタン、保護中の迷子のお知らせが並んでいる',
    },
  },
  {
    title: '大学祭用語集',
    status: 'live',
    audience: '実行委員向け',
    summary:
      '大学祭の運営には、その大学祭ならではの用語やキャンパス内の呼び名が数多くあります。表計算ファイルで管理していた用語集をWebアプリにし、委員が必要なときにすぐ調べられるようにしました。実行委員会のメンバーと共同で開発しています。',
    features: [
      '大学祭独自の用語や専門用語など、550語を収録',
      '地図検索でキャンパス内の場所を探せる',
      '新メンバーの用語理解や、既存メンバーの知識の補完に',
    ],
    tags: ['Next.js', 'Vercel'],
    image: {
      src: '/projects/glossary.png',
      width: 3164,
      height: 1942,
      alt: '大学祭用語集のトップページ。検索欄と、部署ごとに用語を探せるカテゴリのボタンが並んでいる',
    },
  },
];

export default function Projects() {
  return (
    <div className="site">
      <div className="pageContainer pageContainerWide">
        <p className="label reveal">Projects</p>
        <h1 className="pageTitle reveal">プロジェクト</h1>
        <p className="sectionText pageText projectLead reveal">
          <span className="phrase">現場で感じてきた不便や手間を出発点に、</span>
          <span className="phrase">実行委員と来場者の双方が使いやすいサービスをつくっています。</span>
        </p>

        <div className="projectGrid">
          {projects.map((project) => (
            <article key={project.title} className="panel projectCard reveal">
              {project.image && (
                // 画像ごとに縦横比や余白が違うため、同じ大きさの台紙に収めてカードどうしの見た目をそろえる
                <div className="projectImageFrame">
                  <Image
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    alt={project.image.alt}
                    // カードの幅（PC は 2 列、スマホは 1 列）に合わせた大きさの画像を配信する
                    sizes="(max-width: 820px) 100vw, 540px"
                    className="projectImage"
                  />
                </div>
              )}
              <div className="projectMeta">
                <span className={`projectStatus projectStatus-${project.status}`}>
                  {statusLabel[project.status]}
                </span>
                <span className="projectAudience">{project.audience}</span>
              </div>
              <h2 className="projectCardTitle">{project.title}</h2>
              <p className="projectSummary">{project.summary}</p>
              <ul className="projectFeatures">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className="projectTags" aria-label="使用技術">
                {project.tags.map((tag) => (
                  <li key={tag} className="projectTag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="projectCard projectCardNext reveal">
            <p className="label">Next</p>
            <h2 className="projectCardTitle">
              次のプロジェクトを<wbr />準備中です
            </h2>
            <p className="projectSummary">
              大学祭の運営で困っていることや、「こんなサービスがあれば」というアイデアをお聞かせください。
            </p>
            <Link href="/contact" className="secondaryButton projectNextButton">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
