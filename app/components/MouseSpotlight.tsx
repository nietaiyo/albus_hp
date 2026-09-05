'use client';

import { useEffect, useState } from 'react';

interface GridCell {
  x: number;
  y: number;
  key: string;
}

export default function MouseSpotlight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cells, setCells] = useState<GridCell[]>([]);

  useEffect(() => {
    let lastGridX = -1;
    let lastGridY = -1;

    const handleMouseMove = (e: MouseEvent) => {
      // スポットライト用の座標 (Viewport基準)
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // グリッドセルの位置計算 (Document基準。スクロール量を含む)
      const gridX = Math.floor(e.pageX / 40);
      const gridY = Math.floor(e.pageY / 40);

      // 境界値チェック
      if (gridX < 0 || gridY < 0) return;

      // 異なるマスに重なった時だけ更新
      if (gridX !== lastGridX || gridY !== lastGridY) {
        lastGridX = gridX;
        lastGridY = gridY;

        const newCell: GridCell = {
          x: gridX * 40,
          y: gridY * 40,
          key: `${gridX}-${gridY}-${Math.random()}`
        };

        setCells((prev) => {
          const next = [...prev, newCell];
          // 6マス目に入ったときに1マス目を消し、常に最大5マスにする
          if (next.length > 5) {
            next.shift();
          }
          return next;
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* マウス追従スポットライト */}
      {coords.x !== 0 && coords.y !== 0 && (
        <div
          className={`mouseSpotlight ${isVisible ? 'visible' : ''}`}
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }}
        />
      )}

      {/* マウスが被ったグリッドセルのハイライト */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        {cells.map((cell, idx) => {
          // 直近に被ったやつが一番濃く（opacityが大きく）、一番古いやつは消えかけにする
          // インデックス 0 (最古) -> opacity 0.02
          // インデックス 4 (最新) -> opacity 0.18
          const opacities = [0.02, 0.04, 0.07, 0.11, 0.18];
          const opacityIndex = idx + (5 - cells.length);
          const opacity = opacities[opacityIndex] || 0.02;

          return (
            <div
              key={cell.key}
              style={{
                position: 'absolute',
                left: `${cell.x}px`,
                top: `${cell.y}px`,
                width: '40px',
                height: '40px',
                backgroundColor: `rgba(37, 99, 235, ${opacity})`,
                transition: 'background-color 0.3s ease, opacity 0.3s ease',
              }}
            />
          );
        })}
      </div>
    </>
  );
}
