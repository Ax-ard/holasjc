import React from 'react';

export interface SuitcaseTopDownSpriteProps {
  id: string;
  symbol?: string;
  w?: number; // width in grid cells (base)
  h?: number; // height in grid cells (base)
  rotated?: boolean;
  className?: string;
  isThumbnail?: boolean;
}

export const SuitcaseTopDownSprite: React.FC<SuitcaseTopDownSpriteProps> = ({
  id,
  symbol = '',
  w = 1,
  h = 1,
  rotated = false,
  className = 'w-full h-full',
  isThumbnail = false,
}) => {
  // Normalize key for matching
  const key = `${id} ${symbol}`.toLowerCase();

  // If thumbnail mode, render in a standard square viewBox
  if (isThumbnail) {
    const baseW = w;
    const baseH = h;
    const maxDim = Math.max(baseW, baseH) * 60;
    return (
      <svg
        viewBox={`0 0 ${maxDim} ${maxDim}`}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform={`translate(${(maxDim - baseW * 60) / 2}, ${(maxDim - baseH * 60) / 2})`}>
          {renderSpriteGraphic(key)}
        </g>
      </svg>
    );
  }

  // Placed in suitcase mode:
  // Base dimensions in units of 60px
  const baseW = w;
  const baseH = h;
  const currentW = rotated ? baseH : baseW;
  const currentH = rotated ? baseW : baseH;

  const viewWidth = currentW * 60;
  const viewHeight = currentH * 60;

  // When rotated, rotate 90 degrees around the center
  const transform = rotated
    ? `translate(${viewWidth / 2}, ${viewHeight / 2}) rotate(90) translate(-${(baseW * 60) / 2}, -${(baseH * 60) / 2})`
    : undefined;

  return (
    <svg
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      className={`${className} pointer-events-none select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Soft shadow filter for realistic depth */}
        <filter id="item-drop-shadow" x="-8%" y="-8%" width="116%" height="116%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#2D2319" floodOpacity="0.18" />
        </filter>
        {/* Military cloth texture pattern */}
        <pattern id="cloth-pattern" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="6" y2="6" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.04" />
        </pattern>
      </defs>

      <g filter="url(#item-drop-shadow)" transform={transform}>
        {renderSpriteGraphic(key)}
      </g>
    </svg>
  );
};

// Internal function rendering the base graphic in [0, 0, baseW * 60, baseH * 60] coordinates
function renderSpriteGraphic(key: string): React.ReactElement {
  // ==========================================
  // 1. QUẦN ÁO GẤP SET 1 (2x2) - 120 x 120
  // ==========================================
  if (key.includes('req_quan_ao_1') || key.includes('outfit1')) {
    return (
      <g>
        {/* Underneath folded military trousers */}
        <rect x="12" y="10" width="96" height="100" rx="10" fill="#4B6647" stroke="#283A26" strokeWidth="2.5" />
        <line x1="60" y1="12" x2="60" y2="108" stroke="#364B33" strokeWidth="2" strokeDasharray="3 3" />

        {/* Top military olive shirt folded crisply */}
        <rect x="8" y="14" width="104" height="92" rx="9" fill="#5F805B" stroke="#283A26" strokeWidth="2.5" />
        <rect x="8" y="14" width="104" height="92" rx="9" fill="url(#cloth-pattern)" />

        {/* Collar V-fold */}
        <path d="M40 14 L60 40 L80 14" fill="#759970" stroke="#283A26" strokeWidth="2.5" />
        <path d="M40 14 L28 26 L48 26 Z" fill="#6A8D65" stroke="#283A26" strokeWidth="2" />
        <path d="M80 14 L92 26 L72 26 Z" fill="#6A8D65" stroke="#283A26" strokeWidth="2" />

        {/* Center button placket */}
        <rect x="55" y="40" width="10" height="64" rx="2" fill="#537250" stroke="#283A26" strokeWidth="1.5" />
        <circle cx="60" cy="50" r="3" fill="#D5C5A1" stroke="#283A26" strokeWidth="1" />
        <circle cx="60" cy="68" r="3" fill="#D5C5A1" stroke="#283A26" strokeWidth="1" />
        <circle cx="60" cy="86" r="3" fill="#D5C5A1" stroke="#283A26" strokeWidth="1" />

        {/* Chest Pockets with button flaps */}
        {/* Left Pocket */}
        <rect x="18" y="44" width="30" height="34" rx="4" fill="#537250" stroke="#283A26" strokeWidth="2" />
        <path d="M18 44 L33 52 L48 44 Z" fill="#72946D" stroke="#283A26" strokeWidth="2" />
        <circle cx="33" cy="50" r="2.2" fill="#D5C5A1" stroke="#283A26" strokeWidth="1" />

        {/* Right Pocket */}
        <rect x="72" y="44" width="30" height="34" rx="4" fill="#537250" stroke="#283A26" strokeWidth="2" />
        <path d="M72 44 L87 52 L102 44 Z" fill="#72946D" stroke="#283A26" strokeWidth="2" />
        <circle cx="87" cy="50" r="2.2" fill="#D5C5A1" stroke="#283A26" strokeWidth="1" />

        {/* Military red/gold name badge */}
        <rect x="18" y="34" width="28" height="7" rx="1.5" fill="#8B251E" stroke="#283A26" strokeWidth="1" />
        <text x="32" y="39.5" fill="#F8E398" fontSize="4.5" fontWeight="900" textAnchor="middle">HOLA</text>

        {/* Crisp fold lines */}
        <line x1="14" y1="96" x2="106" y2="96" stroke="#283A26" strokeWidth="1.5" strokeDasharray="3 2" />
      </g>
    );
  }

  // ==========================================
  // 2. QUẦN ÁO GẤP SET 2 (2x2) - 120 x 120
  // ==========================================
  if (key.includes('req_quan_ao_2') || key.includes('outfit2')) {
    return (
      <g>
        {/* Underneath folded khaki trousers */}
        <rect x="12" y="10" width="96" height="100" rx="10" fill="#BFA980" stroke="#4A3D28" strokeWidth="2.5" />
        <line x1="60" y1="12" x2="60" y2="108" stroke="#9A8258" strokeWidth="2" strokeDasharray="4 3" />

        {/* Top Navy Blue polo folded cleanly */}
        <rect x="8" y="14" width="104" height="92" rx="9" fill="#3D5A73" stroke="#1D2E3D" strokeWidth="2.5" />

        {/* White polo collar */}
        <path d="M38 14 L60 38 L82 14" fill="#F7FAF9" stroke="#1D2E3D" strokeWidth="2.5" />
        <path d="M38 14 L26 26 L46 26 Z" fill="#E2EBE8" stroke="#1D2E3D" strokeWidth="2" />
        <path d="M82 14 L94 26 L74 26 Z" fill="#E2EBE8" stroke="#1D2E3D" strokeWidth="2" />

        {/* White button placket */}
        <rect x="55" y="38" width="10" height="40" rx="2" fill="#F7FAF9" stroke="#1D2E3D" strokeWidth="1.5" />
        <circle cx="60" cy="46" r="2.5" fill="#3D5A73" />
        <circle cx="60" cy="58" r="2.5" fill="#3D5A73" />
        <circle cx="60" cy="70" r="2.5" fill="#3D5A73" />

        {/* Chest mini crest */}
        <circle cx="34" cy="48" r="7" fill="#F5C542" stroke="#1D2E3D" strokeWidth="1.5" />
        <polygon points="34,43 36,47 40,47 37,49 38,53 34,51 30,53 31,49 28,47 32,47" fill="#8B251E" />

        {/* Bottom fold line */}
        <line x1="12" y1="96" x2="108" y2="96" stroke="#1D2E3D" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
    );
  }

  // ==========================================
  // 3. ĐÔI GIÀY THỂ THAO (2x2) - 120 x 120
  // ==========================================
  if (key.includes('giay_the_thao') || key.includes('shoes')) {
    return (
      <g>
        {/* Left Shoe */}
        <g transform="translate(14, 10)">
          {/* Rubber Sole Outline */}
          <rect x="0" y="0" width="40" height="100" rx="20" fill="#F5F3EC" stroke="#283A26" strokeWidth="2.5" />
          {/* Shoe Upper Fabric */}
          <rect x="3" y="3" width="34" height="94" rx="17" fill="#587854" stroke="#283A26" strokeWidth="2" />
          {/* Toe Cap */}
          <path d="M3 24 C3 8, 37 8, 37 24 Z" fill="#435E3F" stroke="#283A26" strokeWidth="1.5" />
          {/* Lacing Tongue Area */}
          <rect x="11" y="24" width="18" height="50" rx="6" fill="#EDE9DF" stroke="#283A26" strokeWidth="1.5" />
          {/* Criss-cross shoelaces */}
          <line x1="12" y1="32" x2="28" y2="40" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="32" x2="12" y2="40" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="46" x2="28" y2="54" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="46" x2="12" y2="54" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="60" x2="28" y2="68" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="60" x2="12" y2="68" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          {/* Ankle Collar */}
          <circle cx="20" cy="80" r="7" fill="#283A26" opacity="0.3" />
        </g>

        {/* Right Shoe */}
        <g transform="translate(66, 10)">
          {/* Rubber Sole Outline */}
          <rect x="0" y="0" width="40" height="100" rx="20" fill="#F5F3EC" stroke="#283A26" strokeWidth="2.5" />
          {/* Shoe Upper Fabric */}
          <rect x="3" y="3" width="34" height="94" rx="17" fill="#587854" stroke="#283A26" strokeWidth="2" />
          {/* Toe Cap */}
          <path d="M3 24 C3 8, 37 8, 37 24 Z" fill="#435E3F" stroke="#283A26" strokeWidth="1.5" />
          {/* Lacing Tongue Area */}
          <rect x="11" y="24" width="18" height="50" rx="6" fill="#EDE9DF" stroke="#283A26" strokeWidth="1.5" />
          {/* Criss-cross shoelaces */}
          <line x1="12" y1="32" x2="28" y2="40" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="32" x2="12" y2="40" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="46" x2="28" y2="54" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="46" x2="12" y2="54" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="60" x2="28" y2="68" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="60" x2="12" y2="68" stroke="#3A5236" strokeWidth="2.5" strokeLinecap="round" />
          {/* Ankle Collar */}
          <circle cx="20" cy="80" r="7" fill="#283A26" opacity="0.3" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 4. KEM & BÀN CHẢI ĐÁNH RĂNG (1x2) - 60 x 120
  // ==========================================
  if (key.includes('kem_danh_rang') || key.includes('toothpaste')) {
    return (
      <g>
        {/* Toothpaste Tube (Left) */}
        <g transform="translate(6, 12)">
          {/* Cap */}
          <rect x="7" y="0" width="14" height="12" rx="3" fill="#EAE5D9" stroke="#2C402B" strokeWidth="2" />
          <line x1="10" y1="0" x2="10" y2="12" stroke="#B8B0A0" strokeWidth="1" />
          <line x1="14" y1="0" x2="14" y2="12" stroke="#B8B0A0" strokeWidth="1" />
          <line x1="18" y1="0" x2="18" y2="12" stroke="#B8B0A0" strokeWidth="1" />
          {/* Tube Body */}
          <path d="M4 12 L24 12 L27 88 L1 88 Z" fill="#F8FCF7" stroke="#2C402B" strokeWidth="2.2" />
          {/* Mint Wave Stripe */}
          <path d="M2 35 C10 40, 18 30, 26 36 L27 55 C18 48, 10 58, 2 52 Z" fill="#58A87C" stroke="#2C402B" strokeWidth="1" />
          {/* Crimped End */}
          <rect x="1" y="88" width="26" height="6" rx="1.5" fill="#C5DBC8" stroke="#2C402B" strokeWidth="1.5" />
          <text x="14" y="30" fill="#2C402B" fontSize="4.5" fontWeight="bold" textAnchor="middle">MINT</text>
        </g>

        {/* Soft-bristle Toothbrush (Right - Parallel) */}
        <g transform="translate(36, 10)">
          {/* Bristle Head */}
          <rect x="4" y="2" width="12" height="22" rx="6" fill="#F4FBF7" stroke="#2C402B" strokeWidth="2" />
          <rect x="6" y="5" width="8" height="16" rx="4" fill="#58A87C" opacity="0.85" />
          {/* Thin Neck */}
          <rect x="7" y="24" width="6" height="18" rx="2" fill="#95CDB3" stroke="#2C402B" strokeWidth="1.8" />
          {/* Ergonomic Pastel Handle */}
          <rect x="5" y="42" width="10" height="56" rx="5" fill="#69B596" stroke="#2C402B" strokeWidth="2" />
          {/* Rubber thumb grip */}
          <ellipse cx="10" cy="54" rx="3" ry="5" fill="#3D7D62" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 5. BÀN CHẢI ĐÁNH RĂNG (1x1) - 60 x 60
  // ==========================================
  if (key.includes('ban_chai') || key.includes('toothbrush')) {
    return (
      <g transform="translate(10, 6)">
        {/* Clear Travel Case */}
        <rect x="0" y="0" width="40" height="48" rx="10" fill="#E8F4F0" stroke="#2D4D41" strokeWidth="2" opacity="0.75" />
        {/* Folded Travel Brush Inside */}
        <rect x="8" y="6" width="24" height="16" rx="5" fill="#FFFFFF" stroke="#2D4D41" strokeWidth="1.8" />
        <rect x="11" y="8" width="18" height="12" rx="3" fill="#59A887" />
        {/* Folded joint & handle */}
        <rect x="12" y="24" width="16" height="18" rx="4" fill="#71BCA0" stroke="#2D4D41" strokeWidth="1.8" />
        <circle cx="20" cy="24" r="2.5" fill="#2D4D41" />
      </g>
    );
  }

  // ==========================================
  // 6. SỔ TAY QUÂN SỰ (1x2) - 60 x 120
  // ==========================================
  if (key.includes('so_tay') || key.includes('notebook')) {
    return (
      <g transform="translate(6, 8)">
        {/* Hardcover Leatherette Book Body */}
        <rect x="0" y="0" width="48" height="104" rx="5" fill="#2E4A2A" stroke="#182A16" strokeWidth="2.5" />

        {/* Stitched Spine Left */}
        <rect x="0" y="0" width="8" height="104" rx="2" fill="#22381E" stroke="#182A16" strokeWidth="1.5" />
        <line x1="4" y1="8" x2="4" y2="96" stroke="#C4B47C" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Embossed Golden Star Emblem */}
        <circle cx="28" cy="40" r="14" fill="#C9A842" stroke="#182A16" strokeWidth="1.8" />
        <polygon
          points="28,30 31,37 39,37 33,42 35,49 28,45 21,49 23,42 17,37 25,37"
          fill="#8B251E"
          stroke="#182A16"
          strokeWidth="1"
        />

        {/* Book Title Lines */}
        <rect x="14" y="62" width="28" height="3" rx="1.5" fill="#D3C38B" />
        <rect x="18" y="68" width="20" height="2.5" rx="1.2" fill="#D3C38B" />

        {/* Red Ribbon Bookmark trailing at bottom */}
        <path d="M26 98 L26 110 L30 106 L34 110 L34 98 Z" fill="#B32B25" stroke="#182A16" strokeWidth="1.2" />

        {/* Metal Ballpoint Pen looped on side */}
        <rect x="44" y="24" width="4" height="60" rx="2" fill="#D8DEE4" stroke="#182A16" strokeWidth="1.2" />
        <rect x="43" y="32" width="2" height="12" rx="1" fill="#C9A842" />
      </g>
    );
  }

  // ==========================================
  // 7. BÚT VIẾT (1x1) - 60 x 60
  // ==========================================
  if (key.includes('but_viet') || key.includes('pens')) {
    return (
      <g>
        {/* Classic Blue Ballpoint Pen (angled) */}
        <g transform="translate(14, 8) rotate(25)">
          <rect x="0" y="0" width="6" height="52" rx="3" fill="#2563EB" stroke="#1E293B" strokeWidth="2" />
          <polygon points="0,0 6,0 3,-6" fill="#CBD5E1" stroke="#1E293B" strokeWidth="1.5" />
          <rect x="1" y="6" width="4" height="16" rx="1" fill="#93C5FD" />
          <rect x="-1" y="8" width="2" height="14" rx="1" fill="#F59E0B" />
        </g>
        {/* Yellow Highlighter Pen */}
        <g transform="translate(36, 12) rotate(-20)">
          <rect x="0" y="0" width="10" height="46" rx="4" fill="#FACC15" stroke="#1E293B" strokeWidth="2" />
          <polygon points="1,0 9,0 7,-7 3,-7" fill="#FEF08A" stroke="#1E293B" strokeWidth="1.5" />
          <rect x="1" y="34" width="8" height="10" rx="2" fill="#EAB308" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 8. MÓC TREO QUẦN ÁO (2x1) - 120 x 60
  // ==========================================
  if (key.includes('moc_ao') || key.includes('hangers')) {
    return (
      <g transform="translate(10, 6)">
        {/* Swivel Silver Hook Top */}
        <path d="M50 14 C50 6, 60 4, 60 12 C60 18, 50 18, 50 24" stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="24" r="2.5" fill="#475569" />

        {/* 3 Aluminum Hangers Stacked Flat */}
        <polygon points="50,22 4,44 96,44" fill="#E2E8F0" stroke="#334155" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="50,20 6,42 94,42" fill="#F8FAFC" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />

        {/* Colorful Clothespins Clipped on Bar */}
        <rect x="18" y="38" width="6" height="14" rx="2" fill="#F43F5E" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="36" y="38" width="6" height="14" rx="2" fill="#0EA5E9" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="58" y="38" width="6" height="14" rx="2" fill="#EAB308" stroke="#1E293B" strokeWidth="1.2" />
        <rect x="76" y="38" width="6" height="14" rx="2" fill="#10B981" stroke="#1E293B" strokeWidth="1.2" />
      </g>
    );
  }

  // ==========================================
  // 9. KHĂN TẮM CÁ NHÂN (2x1) - 120 x 60
  // ==========================================
  if (key.includes('khan_tam') || key.includes('towel')) {
    return (
      <g transform="translate(8, 8)">
        {/* Neatly Folded 3-tier Cotton Bath Towel */}
        <rect x="0" y="0" width="104" height="44" rx="8" fill="#6E8E7A" stroke="#2B3D33" strokeWidth="2.5" />
        {/* Fold layer 2 */}
        <rect x="4" y="4" width="96" height="36" rx="6" fill="#80A38D" stroke="#2B3D33" strokeWidth="2" />
        {/* Top fold crest */}
        <rect x="8" y="8" width="88" height="28" rx="5" fill="#92B6A0" stroke="#2B3D33" strokeWidth="1.8" />

        {/* Decorative Chevron/Zigzag Weave Border */}
        <path
          d="M12 22 L16 16 L20 22 L24 16 L28 22 L32 16 L36 22 L40 16 L44 22 L48 16 L52 22 L56 16 L60 22 L64 16 L68 22 L72 16 L76 22 L80 16 L84 22 L88 16 L92 22"
          stroke="#476654"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Fluffy Terry fringe lines */}
        <line x1="96" y1="12" x2="102" y2="12" stroke="#476654" strokeWidth="1.5" />
        <line x1="96" y1="20" x2="102" y2="20" stroke="#476654" strokeWidth="1.5" />
        <line x1="96" y1="28" x2="102" y2="28" stroke="#476654" strokeWidth="1.5" />
      </g>
    );
  }

  // ==========================================
  // 10. DẦU GỘI / SỮA TẮM MINI (1x2) - 60 x 120
  // ==========================================
  if (key.includes('dau_goi') || key.includes('shampoo')) {
    return (
      <g>
        {/* Bottle 1: Pastel Mint Shampoo */}
        <g transform="translate(6, 10)">
          <rect x="6" y="0" width="12" height="10" rx="3" fill="#E2E8F0" stroke="#2C3E50" strokeWidth="2" />
          <rect x="0" y="10" width="24" height="42" rx="7" fill="#78B89E" stroke="#2C3E50" strokeWidth="2.2" />
          <rect x="4" y="20" width="16" height="18" rx="3" fill="#FFFFFF" opacity="0.9" />
          <text x="12" y="32" fill="#2C3E50" fontSize="5" fontWeight="900" textAnchor="middle">SHAM</text>
        </g>
        {/* Bottle 2: Warm Peach Body Wash */}
        <g transform="translate(30, 58)">
          <rect x="6" y="0" width="12" height="10" rx="3" fill="#E2E8F0" stroke="#2C3E50" strokeWidth="2" />
          <rect x="0" y="10" width="24" height="42" rx="7" fill="#F4A261" stroke="#2C3E50" strokeWidth="2.2" />
          <rect x="4" y="20" width="16" height="18" rx="3" fill="#FFFFFF" opacity="0.9" />
          <text x="12" y="32" fill="#7F3B1A" fontSize="5" fontWeight="900" textAnchor="middle">BODY</text>
        </g>
      </g>
    );
  }

  // ==========================================
  // 11. TÚI GIẶT ĐỒ (1x2) - 60 x 120
  // ==========================================
  if (key.includes('tui_giat') || key.includes('laundry_bag')) {
    return (
      <g transform="translate(6, 8)">
        {/* Mesh Bag Body */}
        <rect x="0" y="0" width="48" height="104" rx="8" fill="#F8FAFC" stroke="#334155" strokeWidth="2.5" />
        {/* Honeycomb / Mesh Grid Pattern */}
        <line x1="8" y1="0" x2="8" y2="104" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="16" y1="0" x2="16" y2="104" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="24" y1="0" x2="24" y2="104" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="32" y1="0" x2="32" y2="104" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="40" y1="0" x2="40" y2="104" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="0" y1="20" x2="48" y2="20" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="0" y1="40" x2="48" y2="40" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="0" y1="60" x2="48" y2="60" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="0" y1="80" x2="48" y2="80" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2 2" />

        {/* Central Metal Zipper */}
        <rect x="22" y="8" width="4" height="88" rx="2" fill="#94A3B8" stroke="#334155" strokeWidth="1.2" />
        {/* Zipper Pull Tab */}
        <circle cx="24" cy="24" r="4" fill="#3B82F6" stroke="#1E293B" strokeWidth="1.5" />
      </g>
    );
  }

  // ==========================================
  // 12. BỘT GIẶT GÓI NHỎ (1x1) - 60 x 60
  // ==========================================
  if (key.includes('bot_giat_nho') || key.includes('detergent_small')) {
    return (
      <g transform="translate(6, 6)">
        {/* Foil Pouch */}
        <rect x="0" y="0" width="48" height="48" rx="6" fill="#E0F2FE" stroke="#0369A1" strokeWidth="2.5" />
        {/* Crimped heat seal edges */}
        <line x1="0" y1="5" x2="48" y2="5" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 1" />
        <line x1="0" y1="43" x2="48" y2="43" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 1" />

        {/* Bright Clean Energy Swirl */}
        <circle cx="24" cy="24" r="14" fill="#0284C7" />
        <path d="M16 20 C20 14, 28 14, 32 20 C34 26, 26 32, 22 34" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="18" r="2.5" fill="#EF4444" />
        <circle cx="28" cy="28" r="2" fill="#FFFFFF" />
        <text x="24" y="27" fill="#FFFFFF" fontSize="6" fontWeight="900" textAnchor="middle">OMO</text>
      </g>
    );
  }

  // ==========================================
  // 13. QUẠT CẦM TAY MINI (1x2) - 60 x 120
  // ==========================================
  if (key.includes('quat_mini') || key.includes('hand_fan')) {
    return (
      <g transform="translate(6, 8)">
        {/* Circular Fan Head */}
        <circle cx="24" cy="28" r="24" fill="#FDF7E7" stroke="#3E3827" strokeWidth="2.5" />
        <circle cx="24" cy="28" r="21" fill="#FEF08A" stroke="#3E3827" strokeWidth="1.5" />

        {/* 5 Aerodynamic Fan Blades */}
        <g transform="translate(24, 28)">
          <path d="M0 0 C6 -14, 14 -12, 10 -4 Z" fill="#EAB308" stroke="#3E3827" strokeWidth="1" />
          <path d="M0 0 C14 -6, 12 2, 4 10 Z" transform="rotate(72)" fill="#EAB308" stroke="#3E3827" strokeWidth="1" />
          <path d="M0 0 C14 -6, 12 2, 4 10 Z" transform="rotate(144)" fill="#EAB308" stroke="#3E3827" strokeWidth="1" />
          <path d="M0 0 C14 -6, 12 2, 4 10 Z" transform="rotate(216)" fill="#EAB308" stroke="#3E3827" strokeWidth="1" />
          <path d="M0 0 C14 -6, 12 2, 4 10 Z" transform="rotate(288)" fill="#EAB308" stroke="#3E3827" strokeWidth="1" />
          <circle cx="0" cy="0" r="4.5" fill="#F8FAFC" stroke="#3E3827" strokeWidth="1.5" />
        </g>

        {/* Fan Handle */}
        <rect x="17" y="52" width="14" height="50" rx="7" fill="#FEF08A" stroke="#3E3827" strokeWidth="2.2" />
        {/* Power Button */}
        <circle cx="24" cy="66" r="3.5" fill="#3E3827" />
        <circle cx="24" cy="66" r="1.5" fill="#FDE047" />
        {/* LED Indicator */}
        <circle cx="24" cy="76" r="1.5" fill="#22C55E" />
      </g>
    );
  }

  // ==========================================
  // 14. BÁT & ĐŨA CÁ NHÂN (2x1) - 120 x 60
  // ==========================================
  if (key.includes('bat_dua') || key.includes('bowl_chopsticks')) {
    return (
      <g transform="translate(10, 5)">
        {/* Stainless Steel Bowl Outer Rim */}
        <circle cx="50" cy="25" r="24" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2.5" />
        {/* Shiny Inner Bowl Contour */}
        <circle cx="50" cy="25" r="20" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
        <circle cx="50" cy="25" r="15" fill="#F1F5F9" />
        {/* Metal Reflection Highlights */}
        <ellipse cx="45" cy="20" rx="6" ry="10" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 45 20)" />

        {/* Bamboo Chopsticks Resting Horizontally Across Bowl */}
        {/* Chopstick 1 */}
        <line x1="6" y1="20" x2="94" y2="20" stroke="#92400E" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="8" y1="20" x2="92" y2="20" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" />
        {/* Chopstick 2 */}
        <line x1="6" y1="26" x2="94" y2="26" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
        <line x1="8" y1="26" x2="92" y2="26" stroke="#FDE68A" strokeWidth="1" strokeLinecap="round" />
      </g>
    );
  }

  // ==========================================
  // 15. CHĂN GỐI GẤP NHỎ (2x2) - 120 x 120
  // ==========================================
  if (key.includes('chan_goi') || key.includes('blanket_pillow')) {
    return (
      <g>
        {/* Left: Military Barracks Folded Blanket "Brick" */}
        <g transform="translate(10, 10)">
          {/* 8 Sharp Corners Military Fold */}
          <rect x="0" y="0" width="56" height="100" rx="6" fill="#4B6645" stroke="#253A22" strokeWidth="2.5" />
          <rect x="0" y="0" width="56" height="100" rx="6" fill="url(#cloth-pattern)" />

          {/* Crisp square layered folds inside */}
          <line x1="0" y1="25" x2="56" y2="25" stroke="#253A22" strokeWidth="2" />
          <line x1="0" y1="50" x2="56" y2="50" stroke="#253A22" strokeWidth="2" />
          <line x1="0" y1="75" x2="56" y2="75" stroke="#253A22" strokeWidth="2" />

          {/* Golden Military Corner Emblem */}
          <circle cx="28" cy="12" r="5" fill="#EAB308" stroke="#253A22" strokeWidth="1" />
          <polygon points="28,8 29.5,11 33,11 30.5,13 31.5,16 28,14 24.5,16 25.5,13 23,11 26.5,11" fill="#8B251E" />
        </g>

        {/* Right: Soft Quilted Cream Pillow */}
        <g transform="translate(70, 15)">
          <rect x="0" y="0" width="40" height="90" rx="14" fill="#FAF6EE" stroke="#524330" strokeWidth="2.5" />
          {/* Quilted indentation dimples */}
          <circle cx="20" cy="25" r="3" fill="#D8CCA8" stroke="#524330" strokeWidth="1" />
          <circle cx="20" cy="45" r="3" fill="#D8CCA8" stroke="#524330" strokeWidth="1" />
          <circle cx="20" cy="65" r="3" fill="#D8CCA8" stroke="#524330" strokeWidth="1" />
          {/* Soft contour seams */}
          <path d="M4 14 C20 22, 20 68, 4 76" stroke="#D8CCA8" strokeWidth="1.5" fill="none" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 16. SNACK ĂN VẶT (2x1) - 120 x 60
  // ==========================================
  if (key.includes('opt_snack') || key.includes('snack')) {
    return (
      <g transform="translate(10, 8)">
        {/* Foil Pouch */}
        <rect x="0" y="0" width="100" height="44" rx="8" fill="#EA580C" stroke="#431407" strokeWidth="2.5" />
        {/* Zigzag crimped ends */}
        <line x1="6" y1="0" x2="6" y2="44" stroke="#FED7AA" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="94" y1="0" x2="94" y2="44" stroke="#FED7AA" strokeWidth="2" strokeDasharray="2 2" />

        {/* Golden Potato Chips Graphic */}
        <ellipse cx="68" cy="22" rx="14" ry="10" fill="#FDE047" stroke="#431407" strokeWidth="1.8" transform="rotate(-15 68 22)" />
        <ellipse cx="78" cy="24" rx="11" ry="8" fill="#FACC15" stroke="#431407" strokeWidth="1.5" transform="rotate(20 78 24)" />

        {/* Playful Snack Typography */}
        <text x="32" y="24" fill="#FEF08A" fontSize="9" fontWeight="900" fontStyle="italic">CRUNCH</text>
        <text x="32" y="34" fill="#FFFFFF" fontSize="6" fontWeight="bold">BBQ SNACK</text>
      </g>
    );
  }

  // ==========================================
  // 17. BỘT GIẶT TÚI TO (2x2) - 120 x 120
  // ==========================================
  if (key.includes('bot_giat_to') || key.includes('detergent_big')) {
    return (
      <g transform="translate(10, 10)">
        {/* Sturdy 1.5kg Heavy Pouch */}
        <rect x="0" y="0" width="100" height="100" rx="14" fill="#0284C7" stroke="#082F49" strokeWidth="3" />

        {/* Die-cut punch-out handle folded top */}
        <rect x="25" y="8" width="50" height="14" rx="7" fill="#F0F9FF" stroke="#082F49" strokeWidth="2" />

        {/* Sparkle Clean Swirls & Suds */}
        <circle cx="50" cy="58" r="26" fill="#38BDF8" />
        <circle cx="34" cy="50" r="8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="66" cy="46" r="6" fill="#FFFFFF" opacity="0.8" />
        <circle cx="50" cy="74" r="5" fill="#FFFFFF" opacity="0.8" />

        {/* Red flower crest */}
        <circle cx="50" cy="58" r="10" fill="#EF4444" stroke="#082F49" strokeWidth="1.5" />
        <text x="50" y="62" fill="#FFFFFF" fontSize="7" fontWeight="900" textAnchor="middle">1.5kg</text>
      </g>
    );
  }

  // ==========================================
  // 18. XẤP GIẤY A4 (1x2) - 60 x 120
  // ==========================================
  if (key.includes('giay_a4') || key.includes('a4_paper')) {
    return (
      <g transform="translate(6, 8)">
        {/* Stack of Crisp White A4 Paper */}
        <rect x="2" y="3" width="46" height="102" rx="4" fill="#CBD5E1" />
        <rect x="0" y="0" width="46" height="102" rx="4" fill="#FFFFFF" stroke="#334155" strokeWidth="2.2" />

        {/* Top Left Black Binder Clip */}
        <rect x="6" y="2" width="16" height="12" rx="2" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
        <path d="M10 14 C10 22, 18 22, 18 14" stroke="#94A3B8" strokeWidth="2" fill="none" />

        {/* Subtle diagram lines on paper */}
        <line x1="10" y1="28" x2="36" y2="28" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="10" y1="36" x2="36" y2="36" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="10" y1="44" x2="30" y2="44" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="23" cy="62" r="10" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" fill="#EFF6FF" />
        <text x="23" y="65" fill="#1D4ED8" fontSize="6" fontWeight="bold" textAnchor="middle">QP-AN</text>
      </g>
    );
  }

  // ==========================================
  // 19. MÌ TÔM HẢO HẢO (1x1) - 60 x 60
  // ==========================================
  if (key.includes('mi_tom') || key.includes('noodles')) {
    return (
      <g transform="translate(6, 6)">
        {/* Iconic Pink Foil Wrapper */}
        <rect x="0" y="0" width="48" height="48" rx="7" fill="#F43F5E" stroke="#4C0519" strokeWidth="2.5" />
        {/* Crimped sealed borders */}
        <line x1="0" y1="5" x2="48" y2="5" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="2 1" />
        <line x1="0" y1="43" x2="48" y2="43" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="2 1" />

        {/* Yellow Circle Noodle Motif */}
        <circle cx="24" cy="24" r="14" fill="#FEF08A" stroke="#4C0519" strokeWidth="1.5" />
        {/* Wavy Noodle Strands */}
        <path d="M15 22 C18 18, 22 26, 26 20 C30 26, 33 20, 33 24" stroke="#E11D48" strokeWidth="2" fill="none" />
        <text x="24" y="27" fill="#9F1239" fontSize="6.5" fontWeight="900" textAnchor="middle">HẢO HẢO</text>
        {/* Mini Seasoning Sachet on Top Corner */}
        <rect x="30" y="8" width="10" height="7" rx="1.5" fill="#F97316" stroke="#4C0519" strokeWidth="1" />
      </g>
    );
  }

  // ==========================================
  // 20. BÌNH ĐUN SIÊU TỐC (2x2) - 120 x 120
  // ==========================================
  if (key.includes('binh_sieu_toc') || key.includes('kettle')) {
    return (
      <g transform="translate(10, 10)">
        {/* Stainless Steel Outer Kettle Cylinder */}
        <circle cx="50" cy="50" r="44" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
        <circle cx="50" cy="50" r="38" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />

        {/* Kettle Lid */}
        <circle cx="50" cy="50" r="24" fill="#F1F5F9" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="8" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        {/* Steam Vent Hole */}
        <circle cx="42" cy="40" r="2" fill="#0F172A" />

        {/* Pouring Spout Forward (Top) */}
        <polygon points="44,6 56,6 50,0" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />

        {/* Insulated Black Handle (Bottom) */}
        <path d="M40 92 C40 106, 60 106, 60 92" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M40 92 C40 104, 60 104, 60 92" stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    );
  }

  // ==========================================
  // 21. QUẠT KẸP ĐẦU GIƯỜNG (2x2) - 120 x 120
  // ==========================================
  if (key.includes('quat_dau_giuong') || key.includes('bedside_fan')) {
    return (
      <g transform="translate(10, 10)">
        {/* Heavy Spring Clamp (Left) */}
        <rect x="0" y="30" width="22" height="40" rx="6" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="11" cy="50" r="5" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />

        {/* Flexible Gooseneck Connector */}
        <path d="M22 50 C36 50, 36 50, 48 50" stroke="#64748B" strokeWidth="8" strokeLinecap="round" />

        {/* Circular Fan Cage (Right) */}
        <circle cx="68" cy="50" r="30" fill="#E6F4EA" stroke="#137333" strokeWidth="3" />
        {/* 4 Pastel Green Curved Blades */}
        <g transform="translate(68, 50)">
          <path d="M0 0 C10 -16, 20 -12, 12 -4 Z" fill="#34A853" stroke="#137333" strokeWidth="1.5" />
          <path d="M0 0 C10 -16, 20 -12, 12 -4 Z" transform="rotate(90)" fill="#34A853" stroke="#137333" strokeWidth="1.5" />
          <path d="M0 0 C10 -16, 20 -12, 12 -4 Z" transform="rotate(180)" fill="#34A853" stroke="#137333" strokeWidth="1.5" />
          <path d="M0 0 C10 -16, 20 -12, 12 -4 Z" transform="rotate(270)" fill="#34A853" stroke="#137333" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" stroke="#137333" strokeWidth="2" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 22. BÌNH NƯỚC TÁI SỬ DỤNG (1x2) - 60 x 120
  // ==========================================
  if (key.includes('binh_nuoc') || key.includes('water_bottle')) {
    return (
      <g transform="translate(10, 8)">
        {/* Cylindrical Sports Water Bottle */}
        <rect x="0" y="14" width="40" height="92" rx="14" fill="#0284C7" stroke="#082F49" strokeWidth="2.5" />
        {/* Translucent liquid measure window */}
        <rect x="16" y="24" width="8" height="70" rx="4" fill="#BAE6FD" opacity="0.8" />
        <line x1="20" y1="36" x2="24" y2="36" stroke="#0369A1" strokeWidth="1.5" />
        <line x1="18" y1="52" x2="24" y2="52" stroke="#0369A1" strokeWidth="1.5" />
        <line x1="20" y1="68" x2="24" y2="68" stroke="#0369A1" strokeWidth="1.5" />

        {/* Stainless Steel Cap & Silicone Carry Loop */}
        <rect x="8" y="4" width="24" height="12" rx="4" fill="#E2E8F0" stroke="#082F49" strokeWidth="2" />
        <path d="M20 4 C20 -4, 28 -4, 28 4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    );
  }

  // ==========================================
  // 23. Ô GẤP CHE MƯA NẮNG (1x2) - 60 x 120
  // ==========================================
  if (key.includes('o_gap') || key.includes('umbrella')) {
    return (
      <g transform="translate(12, 8)">
        {/* Navy Water-repellent Sleeve */}
        <rect x="0" y="10" width="36" height="92" rx="10" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
        {/* Tight velcro wrap band */}
        <rect x="0" y="46" width="36" height="12" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="28" cy="52" r="3" fill="#94A3B8" />

        {/* Umbrella Handle & Wrist Strap */}
        <rect x="8" y="0" width="20" height="12" rx="4" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
        <path d="M18 0 C18 -8, 28 -8, 28 0" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    );
  }

  // ==========================================
  // 24. TÚI SƠ CỨU NHỎ (2x1) - 120 x 60
  // ==========================================
  if (key.includes('so_cuu') || key.includes('first_aid')) {
    return (
      <g transform="translate(10, 6)">
        {/* Red Medical Pouch */}
        <rect x="0" y="0" width="100" height="48" rx="10" fill="#DC2626" stroke="#450A0A" strokeWidth="2.5" />
        {/* Zipper Rim */}
        <rect x="3" y="3" width="94" height="42" rx="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />

        {/* White Cross in Rounded White Shield */}
        <circle cx="50" cy="24" r="16" fill="#FFFFFF" stroke="#450A0A" strokeWidth="1.8" />
        {/* Red Medical Cross */}
        <rect x="46" y="14" width="8" height="20" rx="1.5" fill="#DC2626" />
        <rect x="40" y="20" width="20" height="8" rx="1.5" fill="#DC2626" />
      </g>
    );
  }

  // ==========================================
  // 25. ĐÈN PIN SIÊU SÁNG (1x1) - 60 x 60
  // ==========================================
  if (key.includes('den_pin') || key.includes('flashlight')) {
    return (
      <g transform="translate(12, 6)">
        {/* Tactical Black Flashlight Body */}
        <rect x="10" y="16" width="16" height="30" rx="3" fill="#1E293B" stroke="#020617" strokeWidth="2" />
        {/* Knurled Grip Ridges */}
        <line x1="10" y1="22" x2="26" y2="22" stroke="#475569" strokeWidth="1.5" />
        <line x1="10" y1="28" x2="26" y2="28" stroke="#475569" strokeWidth="1.5" />
        <line x1="10" y1="34" x2="26" y2="34" stroke="#475569" strokeWidth="1.5" />

        {/* Flared Optical Head */}
        <path d="M4 16 L32 16 L34 2 L2 2 Z" fill="#334155" stroke="#020617" strokeWidth="2" />
        {/* Convex Optical Lens */}
        <ellipse cx="18" cy="2" rx="14" ry="4" fill="#FEF08A" stroke="#020617" strokeWidth="1.5" />
        <circle cx="18" cy="2" r="2.5" fill="#FACC15" />
      </g>
    );
  }

  // ==========================================
  // 26. SẠC ĐIỆN THOẠI (1x1) - 60 x 60
  // ==========================================
  if (key.includes('sac_dt') || key.includes('charger')) {
    return (
      <g transform="translate(8, 8)">
        {/* White Fast Charger Block */}
        <rect x="0" y="4" width="24" height="36" rx="5" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
        <rect x="6" y="10" width="12" height="4" rx="1" fill="#3B82F6" />

        {/* Coiled White USB Cable */}
        <ellipse cx="32" cy="22" rx="12" ry="16" fill="none" stroke="#E2E8F0" strokeWidth="4" />
        <ellipse cx="32" cy="22" rx="12" ry="16" fill="none" stroke="#1E293B" strokeWidth="1.8" />
        {/* Black Silicone Cable Tie */}
        <rect x="29" y="18" width="6" height="8" rx="2" fill="#0F172A" />
      </g>
    );
  }

  // ==========================================
  // 27. TÚI VĂN PHÒNG PHẨM NHỎ (1x2) - 60 x 120
  // ==========================================
  if (key.includes('van_phong_pham') || key.includes('stationery')) {
    return (
      <g transform="translate(6, 8)">
        {/* Frosted Translucent Zip Pouch */}
        <rect x="0" y="0" width="48" height="104" rx="8" fill="#F8FAFC" stroke="#334155" strokeWidth="2.5" />

        {/* Wooden Metric Ruler 15cm */}
        <rect x="6" y="8" width="10" height="88" rx="2" fill="#FDE68A" stroke="#78350F" strokeWidth="1.5" />
        <line x1="12" y1="14" x2="16" y2="14" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="24" x2="16" y2="24" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="34" x2="16" y2="34" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="44" x2="16" y2="44" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="54" x2="16" y2="54" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="64" x2="16" y2="64" stroke="#78350F" strokeWidth="1" />
        <line x1="12" y1="74" x2="16" y2="74" stroke="#78350F" strokeWidth="1" />

        {/* Small Craft Scissors */}
        <g transform="translate(22, 12)">
          <circle cx="8" cy="8" r="6" fill="#F43F5E" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="6" fill="#F43F5E" stroke="#1E293B" strokeWidth="1.5" />
          <polygon points="12,14 8,40 16,40" fill="#CBD5E1" stroke="#1E293B" strokeWidth="1.5" />
        </g>

        {/* White Eraser Block */}
        <rect x="22" y="60" width="18" height="30" rx="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.5" />
        <rect x="22" y="74" width="18" height="16" rx="2" fill="#3B82F6" />
      </g>
    );
  }

  // ==========================================
  // 28. GẤU BÔNG CỠ LỚN (3x3 or 3x2) - 180 x 180
  // ==========================================
  if (key.includes('gau_bong') || key.includes('teddy_bear')) {
    return (
      <g transform="translate(10, 10)">
        {/* Warm Golden-Brown Teddy Bear Top-Down */}
        {/* Ears */}
        <circle cx="40" cy="40" r="18" fill="#B45309" stroke="#451A03" strokeWidth="3" />
        <circle cx="40" cy="40" r="10" fill="#FDE68A" />
        <circle cx="120" cy="40" r="18" fill="#B45309" stroke="#451A03" strokeWidth="3" />
        <circle cx="120" cy="40" r="10" fill="#FDE68A" />

        {/* Arms Spread Wide */}
        <ellipse cx="20" cy="90" rx="18" ry="14" fill="#D97706" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="16" cy="90" r="6" fill="#FDE68A" />
        <ellipse cx="140" cy="90" rx="18" ry="14" fill="#D97706" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="144" cy="90" r="6" fill="#FDE68A" />

        {/* Legs / Big Paws */}
        <ellipse cx="44" cy="144" rx="20" ry="16" fill="#D97706" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="44" cy="144" r="8" fill="#FDE68A" />
        <ellipse cx="116" cy="144" rx="20" ry="16" fill="#D97706" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="116" cy="144" r="8" fill="#FDE68A" />

        {/* Big Chubby Body */}
        <circle cx="80" cy="100" r="42" fill="#D97706" stroke="#451A03" strokeWidth="3" />
        <circle cx="80" cy="102" r="28" fill="#FEF3C7" stroke="#451A03" strokeWidth="1.5" />

        {/* Chubby Round Head */}
        <circle cx="80" cy="56" r="36" fill="#D97706" stroke="#451A03" strokeWidth="3" />
        {/* Snout */}
        <ellipse cx="80" cy="64" rx="16" ry="12" fill="#FEF3C7" stroke="#451A03" strokeWidth="2" />
        <ellipse cx="80" cy="59" rx="6" ry="4" fill="#451A03" />
        <path d="M80 63 L80 68" stroke="#451A03" strokeWidth="2" />
        {/* Happy Sleeping Eyes */}
        <path d="M66 50 Q70 45 74 50" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M86 50 Q90 45 94 50" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    );
  }

  // ==========================================
  // 29. VÀI ĐÔI GIÀY PHỤ (3x2) - 180 x 120
  // ==========================================
  if (key.includes('nhieu_giay') || key.includes('extra_shoes')) {
    return (
      <g transform="translate(10, 10)">
        {/* Pair 1: Trendy Beige Slip-on Shoes */}
        <g transform="translate(8, 0)">
          <rect x="0" y="0" width="30" height="96" rx="15" fill="#E2D4BE" stroke="#4A3D2C" strokeWidth="2.5" />
          <path d="M0 24 C0 10, 30 10, 30 24 Z" fill="#D5C3A8" stroke="#4A3D2C" strokeWidth="1.5" />
          <ellipse cx="15" cy="74" rx="8" ry="10" fill="#4A3D2C" opacity="0.25" />
        </g>
        <g transform="translate(44, 0)">
          <rect x="0" y="0" width="30" height="96" rx="15" fill="#E2D4BE" stroke="#4A3D2C" strokeWidth="2.5" />
          <path d="M0 24 C0 10, 30 10, 30 24 Z" fill="#D5C3A8" stroke="#4A3D2C" strokeWidth="1.5" />
          <ellipse cx="15" cy="74" rx="8" ry="10" fill="#4A3D2C" opacity="0.25" />
        </g>

        {/* Pair 2: Olive Shower Slides (Dép quai ngang) */}
        <g transform="translate(90, 4)">
          <rect x="0" y="0" width="30" height="92" rx="14" fill="#6A8D65" stroke="#283A26" strokeWidth="2.5" />
          <rect x="0" y="26" width="30" height="34" rx="4" fill="#50704B" stroke="#283A26" strokeWidth="2" />
          <line x1="4" y1="43" x2="26" y2="43" stroke="#8AB284" strokeWidth="2" />
        </g>
        <g transform="translate(126, 4)">
          <rect x="0" y="0" width="30" height="92" rx="14" fill="#6A8D65" stroke="#283A26" strokeWidth="2.5" />
          <rect x="0" y="26" width="30" height="34" rx="4" fill="#50704B" stroke="#283A26" strokeWidth="2" />
          <line x1="4" y1="43" x2="26" y2="43" stroke="#8AB284" strokeWidth="2" />
        </g>
      </g>
    );
  }

  // ==========================================
  // 30. GỐI ÔM TRANG TRÍ TO (3x2) - 180 x 120
  // ==========================================
  if (key.includes('goi_om_to') || key.includes('body_pillow')) {
    return (
      <g transform="translate(10, 16)">
        {/* Extra-long plush sleeping cat bolster */}
        <rect x="0" y="0" width="160" height="88" rx="44" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3" />
        {/* Soft belly */}
        <ellipse cx="80" cy="44" rx="48" ry="28" fill="#FFF7ED" stroke="#7C2D12" strokeWidth="1.5" />

        {/* Sleeping Cat Face (Left) */}
        <path d="M14 18 L24 4 L30 20 Z" fill="#EA580C" stroke="#7C2D12" strokeWidth="2" />
        <path d="M14 70 L24 84 L30 68 Z" fill="#EA580C" stroke="#7C2D12" strokeWidth="2" />
        <circle cx="28" cy="44" r="3" fill="#7C2D12" />
        <path d="M22 36 Q28 32 34 36" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M22 52 Q28 56 34 52" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="12" y1="42" x2="2" y2="40" stroke="#7C2D12" strokeWidth="1.5" />
        <line x1="12" y1="46" x2="2" y2="48" stroke="#7C2D12" strokeWidth="1.5" />

        {/* Tail curled (Right) */}
        <path d="M150 44 C164 44, 164 20, 148 20" stroke="#EA580C" strokeWidth="10" strokeLinecap="round" fill="none" />
      </g>
    );
  }

  // ==========================================
  // 31. BỊCH SNACK KHỔNG LỒ (3x2) - 180 x 120
  // ==========================================
  if (key.includes('snack_khong_lo') || key.includes('giant_snack')) {
    return (
      <g transform="translate(10, 10)">
        {/* Giant Puffy Party Size Pouch */}
        <rect x="0" y="0" width="160" height="100" rx="16" fill="#FACC15" stroke="#713F12" strokeWidth="3.5" />
        {/* Crimped ends */}
        <line x1="8" y1="0" x2="8" y2="100" stroke="#EAB308" strokeWidth="3" strokeDasharray="3 3" />
        <line x1="152" y1="0" x2="152" y2="100" stroke="#EAB308" strokeWidth="3" strokeDasharray="3 3" />

        {/* Red Explosion Badge */}
        <circle cx="80" cy="50" r="36" fill="#EF4444" stroke="#713F12" strokeWidth="2" />
        <text x="80" y="44" fill="#FEF08A" fontSize="13" fontWeight="900" textAnchor="middle" fontStyle="italic">
          PARTY
        </text>
        <text x="80" y="60" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle">
          SIZE!
        </text>

        {/* Floating Potato chips */}
        <ellipse cx="38" cy="46" rx="14" ry="10" fill="#FEF08A" stroke="#713F12" strokeWidth="1.5" transform="rotate(-25 38 46)" />
        <ellipse cx="122" cy="54" rx="14" ry="10" fill="#FEF08A" stroke="#713F12" strokeWidth="1.5" transform="rotate(30 122 54)" />
      </g>
    );
  }

  // ==========================================
  // 32. PHỤ KIỆN CỒNG KỀNH (3x2) - 180 x 120
  // ==========================================
  if (key.includes('phu_kien') || key.includes('fashion_bulky')) {
    return (
      <g transform="translate(10, 10)">
        {/* Oversized Slouchy Travel Bag (Left) */}
        <g transform="translate(4, 8)">
          <rect x="0" y="0" width="70" height="84" rx="14" fill="#A16207" stroke="#451A03" strokeWidth="2.5" />
          <path d="M14 0 C14 -12, 56 -12, 56 0" stroke="#78350F" strokeWidth="5" fill="none" />
          <rect x="12" y="32" width="46" height="36" rx="6" fill="#B45309" stroke="#451A03" strokeWidth="1.5" />
        </g>

        {/* Wide-brim Woven Straw Sun Hat (Right) */}
        <g transform="translate(76, 2)">
          {/* Brim */}
          <circle cx="48" cy="48" r="46" fill="#FDE68A" stroke="#78350F" strokeWidth="2.5" />
          {/* Woven concentric rings */}
          <circle cx="48" cy="48" r="38" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <circle cx="48" cy="48" r="28" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          {/* Crown */}
          <circle cx="48" cy="48" r="20" fill="#F59E0B" stroke="#78350F" strokeWidth="2" />
          {/* Ribbon Bow */}
          <path d="M34 56 C44 48, 52 48, 62 56" stroke="#EC4899" strokeWidth="4" fill="none" />
          <circle cx="48" cy="52" r="3.5" fill="#EC4899" />
        </g>
      </g>
    );
  }

  // ==========================================
  // SJC 1: CHIẾC TÚI TOTE SJC VẢI CANVAS (1x2 / 2x2)
  // ==========================================
  if (key.includes('sjc_tui_tote') || (key.includes('tote') && key.includes('sjc'))) {
    return (
      <g transform="translate(4, 6)">
        {/* Handles */}
        <path d="M16 26 C16 4, 36 4, 36 26" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M16 26 C16 5, 36 5, 36 26" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Canvas Body */}
        <rect x="4" y="24" width="44" height="76" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        {/* Blue Bottom Dip */}
        <path d="M4 72 C4 88, 12 98, 26 98 L26 98 C40 98, 48 88, 48 72 Z" fill="#1D4ED8" stroke="#0F172A" strokeWidth="2" />

        {/* SJC Blue Badge with Gold Quill */}
        <rect x="12" y="38" width="28" height="20" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M26 42 L30 48 L22 53 L25 49 Z" fill="#FBBF24" />
        <text x="26" y="55" fill="#FFFFFF" fontSize="6" fontWeight="900" textAnchor="middle">SJC</text>
      </g>
    );
  }

  // ==========================================
  // SJC 2: BÌNH GIỮ NHIỆT KIM LOẠI XANH SJC (1x2)
  // ==========================================
  if (key.includes('sjc_binh_giu_nhiet') || (key.includes('thermos') && key.includes('sjc'))) {
    return (
      <g transform="translate(8, 6)">
        {/* Metallic Chrome Screw Cap */}
        <rect x="11" y="2" width="22" height="12" rx="4" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
        <line x1="14" y1="2" x2="14" y2="14" stroke="#94A3B8" strokeWidth="1" />
        <line x1="22" y1="2" x2="22" y2="14" stroke="#94A3B8" strokeWidth="1" />
        <line x1="30" y1="2" x2="30" y2="14" stroke="#94A3B8" strokeWidth="1" />

        {/* Blue SJC Satin Metallic Body */}
        <rect x="4" y="14" width="36" height="92" rx="14" fill="#1E3A8A" stroke="#0F172A" strokeWidth="2.5" />
        {/* Specular sheen highlight */}
        <line x1="10" y1="20" x2="10" y2="100" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        {/* Golden SJC Insignia */}
        <circle cx="22" cy="56" r="11" fill="#1E40AF" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="22" y="59" fill="#FBBF24" fontSize="6.5" fontWeight="900" textAnchor="middle">SJC</text>
      </g>
    );
  }

  // ==========================================
  // DEFAULT / FALLBACK ITEM (Top-Down Pack)
  // ==========================================
  return (
    <g transform="translate(6, 6)">
      <rect x="0" y="0" width="48" height="48" rx="8" fill="#A8A29E" stroke="#292524" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="14" fill="#D6D3D1" stroke="#292524" strokeWidth="1.5" />
      <text x="24" y="28" fill="#1C1917" fontSize="8" fontWeight="bold" textAnchor="middle">ITEM</text>
    </g>
  );
}
