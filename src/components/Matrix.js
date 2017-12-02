import React from 'react';

const colors = [
  'transparent',
  '#FF0D72',
  '#0DC2FF',
  '#0DFF72',
  '#F538FF',
  '#FF8E0D',
  '#FFE138',
  '#3877FF'
];

const Matrix = ({ matrix, position, ...props }) => (
  <g {...props}>
    {matrix.map((row, y) => (
      <g key={y}>
        {row.map((value, x) => (
          <rect
            key={[y, x]}
            x={x + position.x}
            y={y + position.y}
            fill={colors[value]}
            width={1}
            height={1}
          />
        ))}
      </g>
    ))}
  </g>
);

export default Matrix;
