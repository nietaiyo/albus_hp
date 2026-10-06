'use client';

import { useEffect, useState } from 'react';

// 背景グリッド1マスの大きさ（globals.css の body background-size と合わせる）
const GRID_SIZE = 40;

// 直近に被ったマスほど濃く（インデックス 0 が最古、4 が最新）
const CELL_OPACITIES = [0.02, 0.04, 0.07, 0.11, 0.18];

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
    // 動きを減らす設定のときはエフェクト自体を出さない
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lastGridX = -1;
    let lastGridY = -1;

    const handleMouseMove = (e: MouseEvent) => {
      // スポットライト用の座標 (Viewport基準)
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // グリッドセルの位置計算 (Document基準。スクロール量を含む)
      const gridX = Math.floor(e.pageX / GRID_SIZE);
      const gridY = Math.floor(e.pageY / GRID_SIZE);

      // 境界値チェック
      if (gridX < 0 || gridY < 0) return;

      // 異なるマスに重なった時だけ更新
      if (gridX !== lastGridX || gridY !== lastGridY) {
        lastGridX = gridX;
        lastGridY = gridY;

        const newCell: GridCell = {
          x: gridX * GRID_SIZE,
          y: gridY * GRID_SIZE,
          key: `${gridX}-${gridY}-${Math.random()}`
        };

        setCells((prev) => {
          const next = [...prev, newCell];
          // 新しいマスに入ったら最古のマスを消し、常に最大 CELL_OPACITIES.length マスにする
          if (next.length > CELL_OPACITIES.length) {
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
      <div className="spotlightGrid">
        {cells.map((cell, idx) => {
          const opacity = CELL_OPACITIES[idx + (CELL_OPACITIES.length - cells.length)];

          return (
            <div
              key={cell.key}
              className="spotlightCell"
              style={{
                left: `${cell.x}px`,
                top: `${cell.y}px`,
                backgroundColor: `rgba(37, 99, 235, ${opacity})`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
